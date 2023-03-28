import * as React from "react";
import { Box, Link, Typography } from "@mui/material";

import config from "config";

function Left({ url }) {
  return (
    <Box
      sx={{
        width: "450px",
        height: "500px",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transform: "translate(-20px, -20px)",
          padding: "40px",
          backgroundImage: "linear-gradient(90deg,#606c88,#3f4c6b)",
        }}
      >
        <Typography variant="h5" align="center" sx={{ color: "#fff" }}>
          {config.title}
        </Typography>
        <Link
          href={url}
          underline="hover"
          sx={{
            position: "absolute",
            bottom: "40px",
            textAlign: "center",
            width: "calc(100% - 80px)",
            color: "#fff",
            border: "1px #fff solid",
            padding: "6px",
          }}
        >
          切换至单位端
        </Link>
      </Box>
    </Box>
  );
}
export default Left;
