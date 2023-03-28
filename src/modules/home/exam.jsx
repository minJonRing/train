import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { HighlightOutlined } from "@ant-design/icons";
import { useSignExam } from "services/useHooks";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const navigate = useNavigate();
  const { data } = useSignExam();
  return (
    <Card variant="outlined" sx={{ height: "235px" }}>
      <CardContent>
        <HighlightOutlined
          style={{ display: "block", m: "0 aut", fontSize: "50px" }}
        />
        <Typography variant="h6" sx={{ textAlign: "center", pt: 4 }}>
          报名考试：
          <span style={{ color: "#1976d2", fontSize: "30px" }}>
            {data?.data || 0}
          </span>{" "}
          场
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", mt: "18px" }}
      >
        <Button
          variant="contained"
          disabled={!+data?.data}
          onClick={() => navigate("/exam")}
        >
          详情
        </Button>
      </CardActions>
    </Card>
  );
};

export default Exam;
