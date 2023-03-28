import * as React from "react";
import { Box, Grid } from "@mui/material";
import { useExamPaper } from "services/useHooks";
import { useParams } from "react-router-dom";
import PaperItem from "./item";

import { useState } from "react";
const PaperList = () => {
  const { id } = useParams();
  const { data, isLoading } = useExamPaper({ variables: { id } });
  //
  const [source, changeSource] = useState([]);
  const [val, changeVal] = useState("");
  return (
    <Box sx={{ p: 1 }}>
      {isLoading ? (
        ""
      ) : (
        <Grid container spacing={1}>
          {(data?.data || []).map((el, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <PaperItem el={el} index={index} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default PaperList;
