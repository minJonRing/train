import * as React from "react";
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const Answer = ({ currentQuestion, handleSetCurrentAnswer }) => {
  const handleChange = (e, i) => {
    handleSetCurrentAnswer(currentQuestion.questionId, i);
  };

  return (
    <Box>
      <Box>
        <Typography gutterBottom variant="h5">
          第{currentQuestion.no}题
        </Typography>
        <Typography gutterBottom variant="h6">
          {currentQuestion.label}
        </Typography>
      </Box>
      <FormControl>
        {[1, 2].includes(currentQuestion.examQuestionTypeResponse?.type) ? (
          <RadioGroup onChange={handleChange}>
            {currentQuestion?.questionItemList?.map((el) => {
              return (
                <FormControlLabel
                  key={el.id}
                  control={<Radio value={el.id} />}
                  label={el.content}
                />
              );
            })}
          </RadioGroup>
        ) : (
          <FormGroup>
            {currentQuestion?.questionItemList?.map((el) => {
              return (
                <FormControlLabel
                  key={el.id}
                  control={<Checkbox value={el.id} />}
                  label={el.content}
                />
              );
            })}
          </FormGroup>
        )}
      </FormControl>
    </Box>
  );
};
export default Answer;
