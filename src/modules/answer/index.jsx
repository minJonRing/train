import * as React from "react";
import {
  Box,
  Grid,
  Skeleton,
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
const Answer = ({ data, saveUrl, submitUrl }) => {
  // 路由
  const navigate = useNavigate();
  // 考试id 试卷id
  const { examId, id } = useParams();
  // 获取的试卷id
  // 剩余考试时间
  const [countdown, setCountdown] = useState(0);

  // 试卷
  const [paper, setPaper] = useState([]);

  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState({});

  // 题目的枚举数据
  const [questionEnum, setQuestionEnum] = useState({});

  // 提交的答案
  const [answer, setAnswer] = useState({});

  // 菜单默认展开项
  const [defaultExpanded, setDefaultExpanded] = useState([]);
  const [defaultSelected, setDefaultSelected] = useState([]);

  // 设置当前问题内容
  const handleSetCurrentQuestion = (e, id) => {
    const q = questionEnum[id];
    if (q) {
      const { _expanded, _selected } = q;
      setDefaultExpanded(_expanded);
      setDefaultSelected(_selected);
    }
    q && setCurrentQuestion(q);
  };

  // 设置当前问题答案 q题目id s答案
  const handleSetCurrentAnswer = (q, s) => {
    let a = { ...answer };
    // 有答案天假 无答案删除
    if (s.length) {
      a = {
        ...a,
        [q]: isArray(s) ? s : [s],
      };
    } else {
      delete a[q];
    }
    // to do  提交答案
    setAnswer(a);
  };

  // 初始化页面信息
  useEffect(() => {
    const d = data.data;
    // 题目 试卷类型 答题时间（单位/分钟）
    const { questionList, paperType, duration } = d;
    // 判断该考卷是否作答
    if (true) {
      setCountdown(duration * 60);
      // 设置初始题目-答案信息
      const { initPaper, initAnswers, initTopicEnum } =
        createPaper(questionList);
      setPaper(initPaper);
      setAnswer(initAnswers);
      setQuestionEnum(initTopicEnum);
    } else {
      NoticeRef.current.open({
        message: "您已答完该试卷！",
        type: "warning",
      });
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    }
  }, [data]);

  // 返回提交按钮是否可以提交
  const isSubmitCompute = () => {
    const pl = Object.keys(questionEnum).length;
    const al = Object.keys(answer).length;
    return {
      isSubmit: pl && al && pl === al,
    };
  };

  // 监听答案数据改变 并执行提交请求
  useEffect(() => {
    const { isSubmit } = isSubmitCompute();
    if (isSubmit) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [answer]);

  // 提交
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = () => {
    const answerList = [];
    for (let key in answer) {
      answerList.push({
        questionId: key,
        answerList: answer[key],
      });
    }
    ajax({
      url: submitUrl,
      method: "post",
      data: {
        examId,
        paperId: id,
        answerList,
        duration: countdown,
      },
    }).then((res) => {
      // console.log(res);
    });
  };
  return (
    <Box sx={{ p: 1, height: "100%" }}>
      <Grid container spacing={1} sx={{ height: "calc(100% + 8px)" }}>
        <Grid item xs={12} sm={4} md={4} sx={{ height: "100%" }}>
          {/* 倒计时 */}
          <Card variant="outlined" sx={{ marginBottom: "12px" }}>
            <CardContent sx={{ padding: "0 12px !important" }}>
              {countdown ? <Countdown countdown={countdown} /> : null}
            </CardContent>
          </Card>
          {/* 菜单 */}
          <Navs
            paper={paper}
            answer={answer}
            setCurrentQuestion={handleSetCurrentQuestion}
            expanded={defaultExpanded}
            selected={defaultSelected}
            setDefaultExpanded={setDefaultExpanded}
          />
          {/* 提交按钮 */}
          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            disabled={!confirm}
            sx={{ marginTop: "12px" }}
          >
            {confirm ? "提交试卷" : "还有题目未作答"}
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} md={8} sx={{ height: "100%" }}>
          {/* 答题页面 */}
          <Base
            currentQuestion={currentQuestion}
            setCurrentQuestion={handleSetCurrentQuestion}
            handleSetCurrentAnswer={handleSetCurrentAnswer}
            answer={answer}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Answer;
