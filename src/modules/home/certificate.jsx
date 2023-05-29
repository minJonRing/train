import React, { useEffect, useState } from "react";
import { useRootStore } from "store/index";
import { observer } from "mobx-react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Skeleton,
} from "@mui/material";
import { FileProtectOutlined } from "@ant-design/icons";
import { ajax } from "request/index";
import { getCertificateInfo } from "services/index";
import CertificateTemp from "./temp/certificate";

const Certificate = observer(() => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  // 证书数据
  const [load, setLoad] = useState(false);
  const [certificate, setCertificate] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  // tabs 切换
  const [tabValue, setTabValue] = useState(0);

  const {
    zd: { courseType, changeCourseType },
  } = useRootStore();

  const handleChange = (v) => {
    handleCertificateInfo(v + 1);
    setTabValue(v);
  };

  const handleCertificateInfo = (type) => {
    // LoadingRef.current.open();
    setLoad(true);
    getCertificateInfo({ courseType: type })
      .then(({ data }) => {
        const d = data ? data[0] : {};
        setCertificate(d);
      })
      .catch((e) => {
        setCertificate({});
        setErrorMsg(e);
      })
      .finally(() => {
        // LoadingRef.current.close();
        setLoad(false);
      });
  };

  useEffect(() => {
    ajax({
      url: "/dictCourseType",
      method: "get",
    }).then(({ data }) => {
      changeCourseType(
        data.map(({ id, name }) => ({ value: id, label: name }))
      );
      handleCertificateInfo(data[0]?.id);
    });
  }, []);

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<FileProtectOutlined style={{ fontSize: "24px" }} />}
        title="我的证书"
      />
      <CardContent>
        <AppBar position="static" color="default">
          <Tabs
            value={tabValue}
            onChange={(e, d) => handleChange(d)}
            variant="fullWidth"
            aria-label="action tabs example"
          >
            {courseType.map((e, i) => {
              return <Tab label={e.label} {...a11yProps(i)} key={e.value} />;
            })}
          </Tabs>
        </AppBar>
        <Box sx={{ padding: "1rem 0" }}>
          {load ? (
            <Box flex>
              <Skeleton height={60} />
              <Skeleton height={60} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Box>
          ) : !!Object.keys(certificate).length ? (
            <CertificateTemp historyTrain={certificate} />
          ) : (
            <Typography
              component="div"
              role="tabpanel"
              sx={{ textAlign: "center" }}
            >
              {errorMsg}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
});

export default Certificate;
