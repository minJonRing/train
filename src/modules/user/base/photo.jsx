import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardActions, Button } from "@mui/material";
import { userUserBase } from "services/useHooks";
import { ajax } from "request/index";
import { LoadingRef } from "utils/Loading";
import { NoticeRef } from "utils/Notice";
const Photo = () => {
  // 用户基本信息
  const { data } = userUserBase();
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (data) {
      setAvatarUrl(data.avatarUrl);
    }
  }, [data]);
  // 上传

  const handleUpload = (e) => {
    // return;
    const file = e.target.files[0];
    let size = 10 * 1024 * 1024; //15M
    if (file.size > size) {
      NoticeRef.current.open({
        message: "上传的图片大小不能超过10M！",
        type: "warning",
      });
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    // return;
    LoadingRef.current.open();
    ajax({
      url: "/user/oneInchPhoto",
      method: "post",
      data: formData,
    })
      .then(({ data }) => {
        const { url } = data;
        setAvatarUrl(url);
        NoticeRef.current.open({
          message: "一寸照上传成功",
        });
      })
      .finally(() => {
        LoadingRef.current.close();
      });
  };
  return (
    <Card>
      <CardContent>
        <Box>
          <img
            src={avatarUrl}
            style={{
              display: "block",
              maxWidth: "100%",
              height: "200px",
              margin: "0 auto",
            }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" component="label">
          一寸照上传
          <input hidden accept="image/*" onChange={handleUpload} type="file" />
        </Button>
      </CardActions>
    </Card>
  );
};
export default Photo;
