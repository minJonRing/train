import * as React from "react";
import {
  Box,
  Divider,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Chip,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useTrainDetail } from "services/useHooks";

import dayjs from "dayjs";

import { BookOutlined } from "@ant-design/icons";

const TrainDetailResource = () => {
  const { id } = useParams();
  const { data } = useTrainDetail({ variables: { id } });
  const navigate = useNavigate();
  const {
    courseId,
    courseResponse: { resourceList, startTime, endTime },
  } = data.data;
  const learn = dayjs(Date()).isBetween(
    dayjs(startTime, "YYYY-MM-DD HH:mm:ss"),
    dayjs(endTime, "YYYY-MM-DD HH:mm:ss")
  );
  console.log(resourceList);
  return (
    <Card variant="outlined" sx={{ mt: 1 }}>
      <CardHeader avatar={<BookOutlined />} title="学习资料" />
      <CardContent sx={{ borderTop: "1px #dfdfdf solid", p: 0 }}>
        <List>
          {resourceList?.map((el, i) => (
            <Box key={i}>
              <ListItem>
                <ListItemButton
                  disabled={!learn}
                  onClick={() => navigate(`/train/${courseId}/${el.id}`)}
                >
                  <Box sx={{ width: "100%" }}>
                    <Typography component="div">
                      {i + 1 + "：" + el.title}
                    </Typography>
                    <Box sx={{ mt: 1, display: "flex" }} component="div">
                      <Chip
                        variant="outlined"
                        color={
                          el.isComplete
                            ? "success"
                            : el.watchTime
                            ? "primary"
                            : "default"
                        }
                        label={
                          el.isComplete
                            ? "已完成"
                            : el.watchTime
                            ? `已学习:${el.rate}`
                            : "未开始"
                        }
                        size="small"
                      />
                      <Box sx={{ flexGrow: 1 }} />
                      <Chip
                        variant="outlined"
                        color="primary"
                        label={el.courseTypeList
                          ?.map(
                            (i) =>
                              ["未知课程类型", "检测", "评价", "通用"][i.code]
                          )
                          .join()}
                        size="small"
                      />
                      <Chip
                        color="error"
                        label={el.credit + "学时"}
                        size="small"
                        sx={{ ml: 1 }}
                      />
                    </Box>
                  </Box>
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TrainDetailResource;
