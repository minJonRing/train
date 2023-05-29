import * as React from "react";
import { useParams } from "react-router-dom";
import { useExamPaperAnswerDetail } from "services/useHooks";
import AnswerRead from "modules/answer/read";
const Paper = () => {
  // 考试id 试卷id
  const { id } = useParams();
  const { data, isLoading } = useExamPaperAnswerDetail({
    variables: { id },
    cacheTime: 0,
  });
  return isLoading ? null : <AnswerRead read data={data} />;
};

export default Paper;
