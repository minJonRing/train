import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams, useNavigate } from "react-router-dom";
import { useTrainDetail } from "services/useHooks";
//
import Base from "./base";
import Credit from "./credit";
import Resource from "./resource";
// audit
import TrainAudit from "./audit/index";
import { NoticeRef } from "utils/Notice";

const TrainDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useTrainDetail({
    variables: { id },
    cacheTime: 0,
  });
  const [train, setTrain] = useState({});
  useEffect(() => {
    if (data) {
      const { status, msg } = data;
      if (status !== 200) {
        navigate(-1);
        NoticeRef.current.open({
          message: msg,
          type: "error",
        });
        return;
      }
      const { data: train } = data || {};
      setTrain(train);
    } else {
      navigate(-1);
    }
  }, [data]);
  //
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ p: 1 }}>
      {Object.keys(train).length ? (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={7}>
            <Box
              sx={{
                height: matches ? "auto" : "calc(100vh - 82px)",
                overflow: matches ? "none" : "auto",
              }}
            >
              {/* 培训信息 */}
              <Base course={train} />
              {/* 已完成学士 */}
              <Credit course={train} />
              {/* 学士资料图文，视频 */}
              <Resource course={train} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TrainAudit course={train} />
          </Grid>
        </Grid>
      ) : null}
    </Box>
  );
};
export default TrainDetail;
