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
import { ajax } from "request/index";
import { useNavigate } from "react-router-dom";

const ExamItem = ({ el }) => {
  const navigate = useNavigate();
  const {
    examId,
    exam: { title, scheduleState, courseTypeName, type, isContinuation },
    scoreState,
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

  const handleDownload = () => {
    ajax({
      url: "/admissionCardPdf/personnelDownload",
      responseType: "blob",
      method: "get",
      data: {
        examId: el.examId,
      },
    }).then((blob) => {
      const downloadElement = document.createElement("a");
      const href = window.URL.createObjectURL(blob); //创建下载的链接
      downloadElement.href = href;
      downloadElement.download = "准考证.pdf";
      document.body.appendChild(downloadElement);
      downloadElement.click(); //点击下载
      document.body.removeChild(downloadElement); //下载完成移除元素
      window.URL.revokeObjectURL(href);
    });
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="over2"
          sx={{ height: "65px" }}
        >
          {title || "未知考试名称"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {scoreState
              ? "成绩已发布"
              : scheduleState
              ? "考试已安排,可下载准考证"
              : "考试未安排"}
          </Typography>
          <Button
            size="small"
            color="warning"
            disabled={!scheduleState}
            sx={{
              opacity: scoreState ? 0 : 1,
              pointerEvents: scoreState ? "none" : "auto",
            }}
            onClick={handleDownload}
          >
            准考证下载
          </Button>
        </Box>

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
        {scoreState ? (
          <Button variant="outlined" color="success" size="medium" fullWidth>
            考试已结束
          </Button>
        ) : (
          <>
            {/* 连续考试模拟考 */}
            {isContinuation ? null : (
              <Button
                variant="outlined"
                size="medium"
                fullWidth
                onClick={() => {
                  navigate(`imitate/${examId}`);
                }}
              >
                模拟考试
              </Button>
            )}
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
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default ExamItem;
