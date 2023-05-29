import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { InfoCircleOutlined } from "@ant-design/icons";

import { useNextExam } from "services/useHooks";
import { useState, useEffect } from "react";

const NextExam = () => {
  const [examMsg, changeExamMsg] = useState("您最近暂无可参与的考试");
  const { data } = useNextExam();
  useEffect(() => {
    if (!!data) {
      const {
        examSection: { startTime, url },
      } = data;
      changeExamMsg(
        `您最近将会参加一场【${url}】的考试，于【${startTime}】开始,请提前准备!`
      );
    }
  }, [data]);
  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", backgroundColor: "#f9f9f9" }}
    >
      <CardContent sx={{ display: "flex" }}>
        <InfoCircleOutlined style={{ fontSize: "24px" }} />
        <Typography sx={{ display: "inline-block", pl: 1 }}>
          {examMsg}
        </Typography>
      </CardContent>
      {/* {!!data?.data ? (
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained">详情</Button>
        </CardActions>
      ) : null} */}
    </Card>
  );
};

export default NextExam;
