import * as React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import Base from "./base";
import Navs from "./navs";
import { useExamPaperDetail } from "services/useHooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ajax } from "request/index";
import { isArray } from "lodash";
const Answer = () => {
  const { id } = useParams();
  const { data, isLoading } = useExamPaperDetail({ variables: { id } });
  // 试卷
  const [paper, setPaper] = useState([]);
  const createPaper = (questionList) => {
    const paper = [];
    const paperType = {};
    for (let el of questionList) {
      const {
        examQuestionTypeResponse: { type },
      } = el;
      if (!paperType[type] && paperType[type] !== 0) {
        paperType[type] = paper.length;
        paper.push({
          value: type,
          label: {
            1: "判断题",
            2: "单选题",
            3: "多选题",
            4: "综合题",
          }[type],
          children: [],
        });
      }
    }
    const _questionList = filterPaper(questionList);
    for (let i in _questionList) {
      const el = _questionList[i];
      const {
        examQuestionTypeResponse: { type },
      } = el;
      paper[paperType[type]].children.push(el);
    }
    setPaper(paper);
  };

  const filterPaper = (data, no) => {
    return data.map((i, index) => {
      return {
        ...i,
        value: i.questionId,
        label: (no ? no + " - " : "") + (index + 1) + "：" + i.content,
        no: (no ? no + " - " : "") + (index + 1),
        selected: i.subQuestionList
          ? i.subQuestionList.map(({ selected }) => selected)
          : i.selected
          ? i.selected
          : [],
        children: i.subQuestionList
          ? filterPaper(i.subQuestionList, index + 1)
          : null,
      };
    });
  };

  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState({});

  // 问题的枚举数据
  const [questionEnum, setQuestionEnum] = useState();

  // 当前答题
  const [answer, setAnswer] = useState({});

  // 生成问题枚举数据

  const setPaperItemParam = (data) => {
    const list = setPaperParamList(data);
    const json = {};
    for (let i in list) {
      const el = list[i];
      const { questionId } = el;
      const prev = list[i - 1];
      const next = list[i + 1];
      json[questionId] = {
        ...el,
        prevId: prev ? prev.questionId : "",
        nextId: next ? next.questionId : "",
      };
    }
    setQuestionEnum(json);
  };

  const setPaperParamList = (child, list = []) => {
    for (let el of child) {
      const { children } = el;
      if (children) {
        setPaperParamList(children, list);
      } else {
        list.push(el);
      }
    }
    return list;
  };

  // 设置当前问题内容
  const handleSetCurrentQuestion = (e, id) => {
    const q = questionEnum[id];
    q && setCurrentQuestion(q);
  };
  // 设置当前问题答案
  const handleSetCurrentAnswer = (q, s) => {
    const a = {
      ...answer,
      [q]: isArray(s) ? s : [s],
    };
    setAnswer(a);
  };
  // 监听数据改变
  useEffect(() => {
    console.log(answer);
  }, [answer]);

  useEffect(() => {
    const _data = data.data;
    const { questionList } = _data;
    // 设置初始题目信息
    createPaper(questionList);
  }, [data]);

  // 试卷数据改变
  useEffect(() => {
    console.log(paper);
    // 设置题目枚举信息
    setPaperItemParam(paper);
  }, [paper]);

  useEffect(() => {
    console.log(questionEnum);
    // 设置题目枚举信息
  }, [questionEnum]);
  // 提交
  const handleSubmit = () => {
    ajax({
      url: `/exam/personnel/paper/mock`,
      method: "post",
      data: {
        answerList: [],
        duration: 31.957,
        examId: 54,
        paperId: 172,
      },
    });
  };
  return (
    <Box sx={{ p: 1, height: "100%" }}>
      {isLoading ? (
        <Box>
          <Skeleton variant="rounded" height={20} />
          <Skeleton variant="rounded" height={20} />
          <Skeleton variant="rounded" width={400} height={20} />
          <Skeleton variant="rounded" height={20} />
        </Box>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={4}>
            <Navs
              paper={paper}
              answer={answer}
              setCurrentQuestion={handleSetCurrentQuestion}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Base
              currentQuestion={currentQuestion}
              setCurrentQuestion={handleSetCurrentQuestion}
              handleSetCurrentAnswer={handleSetCurrentAnswer}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Answer;
