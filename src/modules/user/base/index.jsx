import * as React from "react";
import { Box } from "@mui/material";
import Info from "./info";
import Photo from "./photo";
const Base = ({ active }) => {
  return <Box>{active === "info" ? <Info /> : <Photo />}</Box>;
};
export default Base;
