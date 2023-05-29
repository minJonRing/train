import * as React from "react";
import { useParams } from "react-router-dom";
import { useExamPaperDetail } from "services/useHooks";
import Answer from "modules/answer/index";
const Paper = () => {
  // 考试id 试卷id
  const { id } = useParams();
  const { data, isLoading } = useExamPaperDetail({
    variables: { id },
    cacheTime: 0,
  });
  return isLoading ? null : (
    <Answer data={data} submitUrl={"/exam/personnel/paper/mock"} />
  );
};

export default Paper;
