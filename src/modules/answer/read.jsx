import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Base from "./base";
import Navs from "./navs";
import Countdown from "./countdown";
import { NoticeRef } from "utils/Notice";
// import { useExamPaperDetail } from "services/useHooks";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ajax } from "request/index";
import { isArray } from "lodash";
import { createPaper } from "./hooks/index";
const AnswerRead = ({ data, saveUrl, submitUrl }) => {
  // 路由
  const navigate = useNavigate();
  // 考试id 试卷id
  const { examId, id } = useParams();
  // 获取的试卷id

  // 试卷
  const [paper, setPaper] = useState([]);

  // 题目的枚举数据
  const [questionEnum, setQuestionEnum] = useState({});

  // 提交的答案
  const [answer, setAnswer] = useState({});

  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState({});

  // 设置当前问题内容
  const handleSetCurrentQuestion = (e, id) => {
    const q = questionEnum[id];
    q && setCurrentQuestion(q);
  };

  // 初始化页面信息
  useEffect(() => {
    const d = data.data;
    // 题目 试卷类型 答题时间（单位/分钟）
    const { questionList, paperType, duration } = d;
    // 设置初始题目-答案信息
    const { initPaper, initAnswers, initTopicEnum } = createPaper(questionList);
    setPaper(initPaper);
    setQuestionEnum(initTopicEnum);
    setAnswer(initAnswers);
  }, [data]);

  return (
    <Box sx={{ p: 1, height: "100%" }}>
      <Grid container spacing={1} sx={{ height: "calc(100% + 8px)" }}>
        <Grid item xs={12} sm={4} md={4} sx={{ height: "100%" }}>
          {/* 倒计时 */}
          <Card variant="outlined" sx={{ marginBottom: "12px" }}>
            <CardContent sx={{ padding: "0 12px !important" }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ marginBottom: 0, lineHeight: "60px" }}
              >
                试卷答案查看
              </Typography>
            </CardContent>
          </Card>
          {/* 菜单 */}
          <Navs
            read
            paper={paper}
            answer={answer}
            setCurrentQuestion={handleSetCurrentQuestion}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={8} sx={{ height: "100%" }}>
          {/* 答题页面 */}
          {currentQuestion ? (
            <Base
              paper={paper}
              currentQuestion={currentQuestion}
              setCurrentQuestion={handleSetCurrentQuestion}
              answer={answer}
              read
            />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnswerRead;
