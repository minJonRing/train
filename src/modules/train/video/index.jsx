import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTrainDetailVideo, useGetVideoUrl } from "services/useHooks";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import PalyVideo from "./play";
import { ajax } from "request/index";
import { NoticeRef } from "utils/Notice";

//

const BaseVideo = () => {
  const { id, videoId } = useParams();
  const [search] = useSearchParams();
  const timeout = search.get("timeout");

  const navigate = useNavigate();
  /**
   * 获取播放凭证
   */
  const { data } = useTrainDetailVideo({
    variables: { id, videoId },
    cacheTime: 0,
  });

  const [videoPlayURL, setVideoPlayURL] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { status, msg, data: res } = data;
    if (status === 200) {
      const { aliyunVideoId, title } = res;
      setTitle(title);
      ajax({
        url: `/video/playInfo/${aliyunVideoId}`,
      }).then(({ data }) => {
        const { code, playInfo } = data;
        const { playURL } = playInfo.playInfoList[0];
        const u = `${playURL}?MtsHlsUriToken=${code}`;
        setVideoPlayURL(u);
      });
    } else {
      NoticeRef.current.open({
        message: msg,
        type: "error",
      });
      navigate(-1);
    }
  }, [data]);

  return (
    <Box sx={{ height: "100%", p: 1, backgroundColor: "#f5f5f5" }}>
      {videoPlayURL ? (
        <PalyVideo
          title={title}
          isComplete={data?.data.isComplete}
          rate={data?.data.rate}
          videoInfo={{
            cover: data?.data.cover,
            seek: data?.data.seek,
            playURL: videoPlayURL,
          }}
          timeout={timeout}
        />
      ) : null}
    </Box>
  );
};
export default BaseVideo;
