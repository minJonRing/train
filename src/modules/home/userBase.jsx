import React from "react";
import { useRootStore } from "store/index";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";

const UserBase = observer(() => {
  const navigate = useNavigate();
  const {
    user: { userInfo },
  } = useRootStore();
  return (
    <Card variant="outlined" sx={{ height: "235px" }}>
      <CardContent>
        <Avatar
          alt="Remy Sharp"
          src={userInfo.avatar}
          sx={{ width: "80px", height: "80px", m: "0 auto" }}
        />
        <Typography variant="h6" sx={{ textAlign: "center", p: "6px 0" }}>
          {userInfo.nick}
        </Typography>
        <Typography sx={{ textAlign: "center", color: "#666" }}>
          {userInfo.organizationName}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => navigate("/train")}>
          我的课程
        </Button>
        <Button variant="contained" onClick={() => navigate("/exam")}>
          我的考试
        </Button>
        <Button variant="contained">开票管理</Button>
      </CardActions>
    </Card>
  );
});

export default UserBase;
