import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const Answer = ({
  currentQuestion,
  setCurrentQuestion,
  handleSetCurrentAnswer,
  answer,
  read,
}) => {
  const {
    questionId,
    no,
    label,
    examQuestionTypeResponse,
    questionItemList,
    answers,
    prevId,
    nextId,
  } = currentQuestion;
  // 初始id
  const [initId, setInitId] = useState(null);
  // 更新后的id
  const [reId, setReId] = useState(null);

  // 当前答题目答案
  const [currentAnswer, setCurrentAnswer] = useState([]);

  // 设置答案
  const handleChange = (e, i, check) => {
    const { value } = e.target;
    const v = +value;
    if (check) {
      const _answer = [...currentAnswer];
      if (i) {
        _answer.push(v);
      } else {
        const _i = _answer.indexOf(v);
        if (_i !== -1) {
          _answer.splice(_i, 1);
        }
      }
      setCurrentAnswer(_answer);
    } else {
      setCurrentAnswer([v]);
    }
  };

  // 返回选中状态
  const returnChecked = (id) => {
    return answer[questionId] ? answer[questionId].includes(id) : false;
  };

  // 监听题目改变 重置答案为空[]
  useEffect(() => {
    // 设置当前题目选择选中状态
    setReId(questionId);
    const a = answer[questionId] || [];
    setCurrentAnswer(a);
    // 空格下一题
    const downKey = (e) => {
      const c = currentQuestion;
      if (e.keyCode === 32 && c.nextId) {
        setCurrentQuestion(e, c.nextId);
      }
    };
    document.addEventListener("keydown", downKey);
    return () => {
      document.removeEventListener("keydown", downKey);
    };
  }, [currentQuestion]);

  // 监听答案的更改并更新全局答案 initID reId 来区分是来自当前题目答案的改变  还是  变换题目答案的改变
  useEffect(() => {
    if (initId && reId && initId === reId) {
      handleSetCurrentAnswer &&
        handleSetCurrentAnswer(questionId, currentAnswer);
    } else {
      setInitId(reId);
    }
  }, [currentAnswer]);

  return (
    <Box sx={{ position: "relative" }}>
      {!!Object.keys(currentQuestion).length ? (
        <>
          <Box>
            <Box sx={{ padding: "0 12px" }}>
              <Typography gutterBottom variant="h5">
                第{no}题
              </Typography>
              <Typography gutterBottom variant="h6">
                {label}
              </Typography>
            </Box>
            <FormControl sx={{ padding: "0 24px" }}>
              {[1, 2].includes(examQuestionTypeResponse?.type) ? (
                <RadioGroup onChange={handleChange}>
                  {questionItemList?.map((el) => {
                    return (
                      <FormControlLabel
                        key={el.id}
                        control={
                          <Radio
                            value={el.id}
                            checked={returnChecked(el.id)}
                            disabled={read}
                          />
                        }
                        label={el.content}
                      />
                    );
                  })}
                </RadioGroup>
              ) : (
                <FormGroup>
                  {questionItemList?.map((el) => {
                    return (
                      <FormControlLabel
                        key={el.id}
                        control={
                          <Checkbox
                            value={el.id}
                            onChange={(e, i) => handleChange(e, i, true)}
                            checked={returnChecked(el.id)}
                            disabled={read}
                          />
                        }
                        label={el.content}
                      />
                    );
                  })}
                </FormGroup>
              )}
            </FormControl>
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                top: read ? "520px" : "400px",
              }}
            >
              <Button
                variant="text"
                sx={{ width: "200px" }}
                disabled={!prevId}
                onClick={(e) => setCurrentQuestion(e, prevId)}
              >
                上一题
              </Button>
              <Button
                variant="text"
                sx={{ width: "200px" }}
                disabled={!nextId}
                onClick={(e) => setCurrentQuestion(e, nextId)}
              >
                下一题
              </Button>
            </Box>
          </Box>
          {/* 查看答案时显示正确答案 */}
          {read ? (
            <Box>
              <Typography
                variant="h6"
                color="primary"
                sx={{ padding: "0 12px" }}
              >
                正确答案
              </Typography>
              <Box sx={{ padding: "0 24px" }}>
                {questionItemList
                  ?.filter(({ id }) => {
                    return answers.includes(id);
                  })
                  .map(({ id, content }) => {
                    return (
                      <Typography variant="subtitle1" color="primary" key={id}>
                        {content}
                      </Typography>
                    );
                  })}
              </Box>
            </Box>
          ) : null}
        </>
      ) : null}
    </Box>
  );
};
export default Answer;
