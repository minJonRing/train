import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./index.scss";
const ErrorPage = (props) => {
  const { error, resetErrorBoundary } = props;
  const { code, message } = error || {};
  const msg = {
    ERR_NETWORK: "网络发生了点小问题，请检查网络连接是否正常！",
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Box>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1482f0",
              mb: 2,
            }}
          >
            哎呀！
          </Typography>
          <Typography component="div" variant="subtitle1">
            {msg[code] || message}
          </Typography>
        </Box>
        <Box className="wrapper" sx={{ margin: "20px auto 24px" }}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </Box>
        <Button variant="contained" fullWidth onClick={resetErrorBoundary}>
          刷新
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
