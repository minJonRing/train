import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExamPaperItem = ({ examId, el, index }) => {
  const { personnelPaper, score, id } = el;
  const navigate = useNavigate();
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {`试卷${index + 1}`}
        </Typography>
        <Typography variant="body2" color="success" sx={{ pb: 1 }}>
          {"考试结果：" +
            (personnelPaper ? `${personnelPaper?.score}分` : "暂无")}
        </Typography>
        <Box>
          <Chip
            label={"满分:" + (`${score}分` || "未知")}
            color="primary"
            size="small"
          />
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "center" }}>
        {personnelPaper?.score ? (
          <Button
            variant="outlined"
            size="medium"
            fullWidth
            color="success"
            onClick={() =>
              navigate(`/exam/answer/${examId}/${personnelPaper.id}`)
            }
          >
            查看答案
          </Button>
        ) : (
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={() => navigate(`/exam/paper/${examId}/${id}`)}
          >
            开始考试
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ExamPaperItem;
