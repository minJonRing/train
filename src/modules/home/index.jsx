import * as React from "react";
import { Box, Grid } from "@mui/material";
import UserBase from "./userBase";
import Train from "./train";
import Exam from "./exam";
import NextExam from "./nextExam";
import Certificate from "./certificate";
export default () => {
  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <UserBase />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Train />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Exam />
        </Grid>
        <Grid item xs={12} sm={12}>
          <NextExam />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Certificate />
        </Grid>
      </Grid>
    </Box>
  );
};
