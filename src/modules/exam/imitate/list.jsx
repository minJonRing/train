import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useAjax } from "request/index";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PaperItem from "./item";

const PaperList = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isCatch } = useAjax({
    url: `/exam/personnel/paper/mock/list/${examId}`,
  });

  useEffect(() => {
    if (!isLoading) {
      if (isCatch) {
        navigate(-1);
      }
    }
  }, [isLoading]);
  //
  return (
    <Box sx={{ p: 1 }}>
      {isLoading ? (
        ""
      ) : (
        <Grid container spacing={1}>
          {(data?.data || []).map((el, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <PaperItem examId={examId} el={el} index={index} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default PaperList;
