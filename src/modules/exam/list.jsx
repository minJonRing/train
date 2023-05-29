import * as React from "react";
import { Box, Grid } from "@mui/material";
import { useExam } from "services/useHooks";

import ExamItem from "./item";
const Exam = () => {
  const { data } = useExam();
  return (
    <Box sx={{ p: 1, backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={1}>
        {data?.data?.data.map((el, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ExamItem el={el} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Exam;
