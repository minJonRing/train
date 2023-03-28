import * as React from "react";
import { Box } from "@mui/material";
import { useTrainDetailVideo, useGetVideoUrl } from "services/useHooks";
import { useParams } from "react-router-dom";
import PalyVideo from "./play";
//

const BaseVideo = () => {
  const { id, videoId } = useParams();
  /**
   * 获取播放凭证
   */
  const { data } = useTrainDetailVideo({
    variables: { id, videoId },
    cacheTime: 0,
  });

  const { data: videoPlayURL, isLoading } = useGetVideoUrl({
    variables: { vid: data?.data.aliyunVideoId },
    cacheTime: 0,
  });
  if (isLoading) {
    return null;
  }
  return (
    <Box sx={{ height: "100%", p: 1 }}>
      <PalyVideo
        videoInfo={{
          cover: data?.data.cover,
          seek: data?.data.seek,
          playURL: videoPlayURL,
        }}
      />
    </Box>
  );
};
export default BaseVideo;
