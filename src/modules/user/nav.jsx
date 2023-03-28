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

const ExamPaperItem = observer(() => {
  const {
    user: { userInfo },
  } = useRootStore();
  return (
    <Card variant="outlined">
      {/* <CardMedia
        component="img"
        height="140"
        image={userInfo.avatar}
        alt="头像"
        sx={{}}
      /> */}
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
        <Button fullWidth size="medium">
          基本信息
        </Button>
        <Button fullWidth size="medium">
          证件照
        </Button>
      </CardActions>
    </Card>
  );
});

export default ExamPaperItem;
