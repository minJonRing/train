import * as React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useTrainDetail } from "services/useHooks";

const TrainDetailBase = () => {
  const { id } = useParams();
  const { data } = useTrainDetail({ variables: { id } });
  const {
    courseResponse: {
      title,
      description,
      completeCreditList,
      thumbnail,
      startTime,
      endTime,
    },
  } = data.data || {
    courseResponse: {},
  };
  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 160 }} image={thumbnail} title="封面" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title || "未知课程名称"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pb: 1 }}>
          描述：{description || "未知课程描述"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pb: 1 }}>
          课程时间：{startTime + " 至 " + endTime}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          结业所需学时
        </Typography>
        {completeCreditList.map((el, i) => (
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
