import * as React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const TrainItem = ({ el }) => {
  const {
    id,
    courseResponse: {
      title,
      description,
      courseResponse,
      thumbnail,
      isCharge,
      startTime,
      endTime,
    },
    state,
  } = el;
  const status = {
    1: "待上传资料",
    2: "报名资料待审核",
    3: "待缴费",
    4: "缴费待审核",
    5: "报名完成",
  };
  const navigate = useNavigate();
  // 课程是否在学士时间内
  const learn = dayjs(Date()).isBetween(
    dayjs(startTime, "YYYY-MM-DD HH:mm:ss"),
    dayjs(endTime, "YYYY-MM-DD HH:mm:ss")
  );
  return (
    <Card variant="outlined">
      {thumbnail ? (
        <CardMedia sx={{ height: 160 }} image={thumbnail} title="封面" />
      ) : (
        <Box
          sx={{
            height: 160,
            backgroundColor: "#f9f9f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <ImageIcon fontSize="large" />
            <Typography>暂无封面</Typography>
          </Box>
        </Box>
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="over2"
          sx={{ height: "65px" }}
        >
          {title || "未知课程名称"}
        </Typography>
        <Typography
          variant="body2"
          className="over3"
          color="text.secondary"
          sx={{
            height: "60px",
          }}
        >
          {description || "未知课程描述"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ p: "6px 0" }}>
          培训开始时间：{startTime}
        </Typography>
        <Box>
          <Chip
            label={isCharge ? "付费课程" : "免费课程"}
            variant="outlined"
            size="small"
          />
          <Chip
            label={status[state] || "未知状态"}
            variant="outlined"
            color="primary"
            size="small"
            sx={{ ml: 1 }}
          />
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "center" }}>
        {/* <Link
          to={`${id || 1}`}
          style={{ display: "block", width: "100%", textDecoration: "none" }}
        > */}
        <Button
          variant="outlined"
          size="medium"
          fullWidth
          disabled={!learn}
          onClick={() => {
            navigate(`${id}`);
          }}
        >
          {learn ? "开始学习" : "课程已结束"}
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
};

export default TrainItem;
