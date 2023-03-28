import * as React from "react";
import { Box, Grid } from "@mui/material";
import Navs from "./nav";
import Base from "./base/index";
const User = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3} md={3}>
          <Navs />
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Base />
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
