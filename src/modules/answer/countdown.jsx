import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Countdown = ({ countdown }) => {
  // 初始时间
  const [initTime, setInitTime] = useState(countdown);
  // 当前时间
  const [time, setTime] = useState("");
  // 初始时间改改变;
  useEffect(() => {
    const h = Math.floor(initTime / 3600);
    const m = Math.floor(initTime / 60) % 60;
    const s = initTime % 60;
    setTime(
      `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${s > 9 ? s : "0" + s}`
    );
    if (initTime > 0) {
      const T = initTime - 1;
      setTimeout(() => {
        setInitTime(T);
      }, 1000);
    }
  }, [initTime]);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ marginBottom: 0, lineHeight: "60px" }}
      >
        离本次考试结束：
      </Typography>
      <Typography sx={{ color: "red", fontSize: "20px" }}>{time}</Typography>
    </Box>
  );
};
export default Countdown;
