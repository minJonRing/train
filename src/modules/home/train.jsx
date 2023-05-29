import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { BookOutlined } from "@ant-design/icons";
import { useSignTrain } from "services/useHooks";
import { useNavigate } from "react-router-dom";

const Train = () => {
  const { data } = useSignTrain();
  const navigate = useNavigate();
  return (
    <Card variant="outlined" sx={{ height: "235px" }}>
      <CardContent>
        <BookOutlined
          style={{ display: "block", m: "0 aut", fontSize: "50px" }}
        />
        <Typography variant="h6" sx={{ textAlign: "center", pt: 4 }}>
          报名课程：
          <span style={{ color: "#1976d2", fontSize: "30px" }}>
            {data?.data?.signCourseCount || 0}
          </span>
          {/* 场 */}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", mt: "18px" }}
      >
        <Button
          variant="contained"
          disabled={!+data?.data?.signCourseCount}
          onClick={() => navigate("/train")}
        >
          详情
        </Button>
      </CardActions>
    </Card>
  );
};

export default Train;
