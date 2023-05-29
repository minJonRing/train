import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { ajax } from "request/index";
import { NoticeRef } from "utils/Notice";
import { LoadingRef } from "utils/Loading";

import DoneIcon from "@mui/icons-material/Done";

import Upload from "./upload/index";

//
const TrainAudit = ({ course }) => {
  const {
    id,
    photo: p,
    certificateList,
    certificateApproveNote,
    state: s,
  } = course;
  const [photo, setPhoto] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    setPhoto([{ certificate: p, certificateName: "个人照片" }]);
    setCertificate(certificateList);
    setState(s);
  }, [course]);

  const stateName = {
    1: "待上传资料",
    2: "报名资料待审核",
    3: "待缴费",
    4: "缴费待审核",
    5: "报名完成",
  };

  const onSubmitAudit = () => {
    LoadingRef.current.open();
    ajax({
      url: `/courseSign/personnel/submitCertificate/${id}`,
      method: "post",
    })
      .then((res) => {
        const { status, msg } = res;
        if (status === 200) {
          NoticeRef.current.open({
            message: "资料提交审核成功",
          });
          setState(2);
        }
      })
      .finally(() => {
        LoadingRef.current.close();
      });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" component="span">
            报名状态
          </Typography>
          <Chip
            label={stateName[state]}
            color={state !== 5 ? "warning" : "info"}
            icon={state === 5 ? <DoneIcon /> : null}
            sx={{ ml: 2 }}
          />
        </Box>
        {/* 不通过原因 */}
        {certificateApproveNote ? (
          <Box sx={{ pt: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color="error"
              sx={{ fontSize: "18px" }}
            >
              不通过原因：{certificateApproveNote}
            </Typography>
          </Box>
        ) : null}
        <Box>
          {/* 个人照片 */}
          <Box
            sx={{
              margin: "16px 0",
              p: "16px 0",
              borderTop: "1px #dfdfdf solid",
            }}
          >
            <Typography variant="h6" align="center" sx={{ lineHeight: 2 }}>
              个人照片上传
            </Typography>
            <Upload
              id={id}
              list={photo}
              uploadUrl="/courseSign/personnel/uploadPhoto"
              deleteUrl="/courseSign/personnel/deletePhoto"
              setList={setPhoto}
              read={state !== 1}
            ></Upload>
          </Box>
          {/* 其他资料 */}
          <Box
            sx={{
              margin: "16px 0",
              p: "16px 0",
              borderTop: "1px #dfdfdf solid",
            }}
          >
            <Typography variant="h6" align="center" sx={{ lineHeight: 2 }}>
              其他资料上传
            </Typography>
            <Upload
              id={id}
              list={certificate}
              uploadUrl="/courseSign/personnel/uploadCertificate"
              deleteUrl="/courseSign/personnel/deleteCertificate"
              setList={setCertificate}
              add
              read={state !== 1}
            />
          </Box>
          {state === 1 ? (
            <Button
              variant="contained"
              size="medium"
              fullWidth
              onClick={onSubmitAudit}
            >
              提交审核
            </Button>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
};
export default TrainAudit;
