import * as React from "react";
import { useRootStore } from "store/index";
import { observer } from "mobx-react";
import {
  Box,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const ExamPaperItem = observer(({ setActive }) => {
  const {
    user: { userInfo },
  } = useRootStore();
  console.log(userInfo);
  return (
    <Card variant="outlined">
      <Box>
        <Avatar
          alt="头像"
          src={userInfo.avatar}
          sx={{ width: 100, height: 100, margin: "12px auto" }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {userInfo.nick}
        </Typography>
        <Typography
          variant="body2"
          color="success"
          sx={{ pb: 1 }}
          align="center"
        >
          {userInfo.organizationName}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth size="medium" onClick={() => setActive("info")}>
          基本信息
        </Button>
        <Button fullWidth size="medium" onClick={() => setActive("phone")}>
          证件照
        </Button>
      </CardActions>
    </Card>
  );
});

export default ExamPaperItem;
