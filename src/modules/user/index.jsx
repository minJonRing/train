import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Navs from "./nav";
import Base from "./base/index";
const User = () => {
  const [active, setActive] = useState("photo");
  return (
    <Box sx={{ p: 1, height: "100%", backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={1} sx={{ height: "calc(100% + 8px)" }}>
        <Grid item xs={12} sm={3} md={3}>
          <Navs setActive={setActive} />
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Base active={active} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
