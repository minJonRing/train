import * as React from "react";
import {
  Box,
  Divider,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { FileProtectOutlined } from "@ant-design/icons";
import { useTrain } from "services/useHooks";
import zs from "assets/images/mb.jpg";

const Certificate = () => {
  const { data } = useTrain();
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<FileProtectOutlined style={{ fontSize: "24px" }} />}
        title="我的证书"
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          {(data?.data.data || []).map((el) => (
            <Card key={el.id} sx={{ m: 1, position: "relative" }}>
              <CardMedia sx={{ height: 140 }} image={zs} title="证书" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    width: "240px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    mb: 0,
                  }}
                >
                  {el.courseResponse.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ opacity: 0 }}>
                <Button size="small">证书下载</Button>
              </CardActions>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                }}
              >
                <Divider />
                <CardActions>
                  <Button fullWidth size="small">
                    证书下载
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Certificate;
