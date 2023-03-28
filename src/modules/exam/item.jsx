import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExamItem = ({ el }) => {
  const navigate = useNavigate();
  const {
    examId,
    exam: { title, scheduleState, courseTypeName, type },
    state,
  } = el;
  const examType = {
    1: "线上考试",
    2: "线下考试",
  };
  const status = {
    1: "待上传资料",
    2: "报名资料待审核",
    3: "待缴费",
    4: "缴费待审核",
    5: "报名完成",
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title || "未知考试名称"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pb: 1 }}>
          {scheduleState ? "考试已安排,可下载准考证" : "考试未安排"}
        </Typography>
        <Box>
          <Chip label={courseTypeName} color="primary" size="small" />
          <Chip
            label={examType[type]}
            variant="outlined"
            size="small"
            sx={{ ml: 1 }}
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
        <Button
          variant="outlined"
          size="medium"
          fullWidth
          onClick={() => {
            navigate(`paper/${examId}`);
          }}
        >
          模拟考试
        </Button>
        <Button
          variant="contained"
          size="medium"
          fullWidth
          onClick={() => {
            window.open("http://exam.ohras.cn/");
          }}
        >
          线上考试
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExamItem;
