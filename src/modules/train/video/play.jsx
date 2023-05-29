import React, { useMemo } from "react";
import { Box, Card, CardContent, Typography, Chip } from "@mui/material";

import LoadScript from "utils/LoadScript";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { ajax } from "request/index";
import { NoticeRef } from "utils/Notice";
import { useIdle, usePageLeave } from "./util/index";
import DoneIcon from "@mui/icons-material/Done";
import AutorenewIcon from "@mui/icons-material/Autorenew";

//

const Play = ({ title, isComplete: complete, rate: r, videoInfo, timeout }) => {
  const { id, videoId } = useParams();
  const videoRef = useRef(null);
  const mouseRef = useRef(null);
  /**
   * 进度
   */
  const [rate, setRate] = useState(r);
  const [isComplete, setIsComplete] = useState(!!complete);
  /**
   * 鼠标暂停时间
   */
  const { stop } = useIdle(timeout);

  /**
   * 判断是否离开页面
   */
  const { leave } = usePageLeave();
  /**
   * 是否可以上传接口
   */
  const canRequestUpdateTime = useMemo(() => {
    return !stop && !leave;
  }, [stop, leave]);
  /**
   * 无法上传环境时，暂停播放
   */
  useEffect(() => {
    if (!canRequestUpdateTime) {
      videoRef.current?.pause();
    }
  }, [canRequestUpdateTime]);
  //
  const [updateTime, changeUpdateTime] = useState(0);

  useEffect(() => {
    init();
    return () => {
      videoRef.current?.on("timeupdate", handlePlayUpdateTime);
      videoRef.current?.on("ended", onVideoEnded);
    };
  }, []);

  // 初始化视频
  const init = () => {
    LoadScript(
      "https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-h5-min.js"
    ).then(() => {
      const getTime = () => {
        changeUpdateTime(videoInfo.seek || 0);
        //return返回的是自定义起播时间
        return videoInfo.seek;
      };
      import("./util/MemoryPlayComponent/export").then(() => {
        // 视频控制组件默认
        const videoControlBarNormal = [
          {
            name: "progress",
            align: "blabs",
            x: 0,
            y: 44,
          },
          {
            name: "playButton",
            align: "tl",
            x: 15,
            y: 12,
          },
          {
            name: "timeDisplay",
            align: "tl",
            x: 10,
            y: 7,
          },
          {
            name: "fullScreenButton",
            align: "tr",
            x: 10,
            y: 12,
          },
          {
            name: "volume",
            align: "tr",
            x: 5,
            y: 10,
          },
        ];
        videoRef.current = new Aliplayer({
          id: "player",
          width: "100%",
          source: JSON.stringify({
            OD: videoInfo?.playURL,
          }),
          defaultDefinition: "OD",
          cover: videoInfo?.cover,
          encryptType: 1,
          disableSeek: true,
          useH5Prism: true,
          controlBarVisibility: "always",
          preload: true,
          diagnosisButtonVisible: false,
          playsinline: true,
          components: [
            {
              name: "MemoryPlayComponent",
              type: AliPlayerComponent.MemoryPlayComponent,
              args: [getTime],
            },
          ],
          skinLayout: [
            {
              name: "bigPlayButton",
              align: "blabs",
              x: 30,
              y: 80,
            },
            {
              name: "H5Loading",
              align: "cc",
            },
            {
              name: "errorDisplay",
              align: "tlabs",
              x: 0,
              y: 0,
            },
            {
              name: "infoDisplay",
            },
            {
              name: "tooltip",
              align: "blabs",
              x: 0,
              y: 56,
            },
            {
              name: "thumbnail",
            },
            {
              name: "controlBar",
              align: "blabs",
              x: 0,
              y: 0,
              children: videoControlBarNormal,
            },
          ],
        });
        videoRef.current?.on("timeupdate", handlePlayUpdateTime);
        videoRef.current?.on("ended", onVideoEnded);
      });
    });
  };
  // 视频播放中
  const handlePlayUpdateTImeImmediate = (end) => {
    const time = videoRef.current?.getCurrentTime();
    if (!!time && videoId && id) {
      const watchTimeComputed = time - updateTime;
      const _watchTime = Math.ceil(
        watchTimeComputed < 0
          ? 0
          : watchTimeComputed > 120
          ? 60
          : watchTimeComputed,
        2
      );
      ajax({
        url: "/personnelVideoWatch",
        method: "post",
        data: {
          videoId,
          seek: time,
          watchTime: _watchTime,
          courseId: id,
        },
      })
        .then(({ data }) => {
          if (!data) {
            return;
          }
          const { isComplete, rate } = data;
          setRate(rate);
          if (isComplete === 1) {
            setIsComplete(1);
            NoticeRef.current?.open({
              message: "您已完成本课程学习",
              type: "success",
            });
          }
        })
        .finally(() => {
          changeUpdateTime(end ? 0 : time);
        });
    }
  };

  // 1分钟记录一次观看时间
  const handlePlayUpdateTime = (() => {
    let timeSlot = false;
    let time = 0;
    setInterval(() => {
      time++;
    }, 1000);
    const f = function () {
      if (timeSlot) {
        handlePlayUpdateTImeImmediate();
        timeSlot = false;
      } else {
        if (time >= 60) {
          timeSlot = true;
          time = 0;
        }
      }
    };
    return f;
  })();
  const onVideoEnded = () => {
    handlePlayUpdateTImeImmediate(true);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Card sx={{ mb: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "8px !important",
          }}
        >
          <Typography variant="h6" className="over" color="text.secondary">
            {title}
          </Typography>
          <Chip
            label={rate}
            color={isComplete ? "success" : "warning"}
            icon={isComplete ? <DoneIcon /> : <AutorenewIcon />}
          />
        </CardContent>
      </Card>
      <Box sx={{ height: "calc(100% - 60px)" }}>
        <Box ref={mouseRef} id="player-box">
          <video
            ref={videoRef}
            id="player"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            style={{ height: "100%", overflow: "hidden" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Play;
