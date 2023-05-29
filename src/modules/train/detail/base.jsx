import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const TrainDetailBase = ({ course }) => {
  const {
    courseResponse: {
      thumbnail,
      title,
      description,
      startTime,
      endTime,
      completeCreditList,
    } = {},
  } = course;
  return (
    <Card variant="outlined">
      <CardMedia title="封面">
        <img src={thumbnail} style={{ display: "block", width: "100%" }} />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "26px" }}
        >
          {title || "未知课程名称"}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ pb: 1, fontSize: "18px" }}
        >
          描述：{description || "未知课程描述"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pb: 1 }}>
          课程时间：{startTime + " 至 " + endTime}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          结业所需学时
        </Typography>
        {completeCreditList?.map((el, i) => (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pb: 1 }}
            key={i}
          >
            {`${el.courseTypeName}-${el.levelName}：线上【 ${el.credit} 】小时,线下【 ${el.offlineCredit} 】小时`}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrainDetailBase;
