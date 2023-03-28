import * as React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
//
import Base from "./base";
import Credit from "./credit";
import Resource from "./resource";
import { Boundary } from "boundary/index";

const TrainDetail = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Boundary>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <Base />
            {/* 已完成学士 */}
            <Credit />
            {/* 学士资料图文，视频 */}
            <Resource />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            123
          </Grid>
        </Grid>
      </Boundary>
    </Box>
  );
};
export default TrainDetail;
