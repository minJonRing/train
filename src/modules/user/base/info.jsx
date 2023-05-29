import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import {
  FormContainer,
  TextFieldElement,
  SelectElement,
} from "react-hook-form-mui";
import { ajax, useAjax } from "request/index";
import { useForm } from "react-hook-form";
import { userUserBase } from "services/useHooks";
import { useState, useEffect } from "react";
import { blur, change } from "utils/rules";
import { LoadingRef } from "utils/Loading";
import { NoticeRef } from "utils/Notice";
const Info = () => {
  // 用户基本信息
  const { data, isLoading } = userUserBase();
  // 字典
  const [zdEdu, setZdEdu] = useState([]);
  const { data: edu } = useAjax({
    url: "/edu/list",
  });
  const [zdPersonnelType, setZdPersonnelType] = useState([]);
  const { data: personnelType } = useAjax({
    url: "/personnelType/list",
  });
  const [zdQualificationCategory, setZdQualificationCategory] = useState([]);
  const { data: qualificationCategory } = useAjax({
    url: "/qualificationCategory/list",
  });
  useEffect(() => {
    if (edu) {
      setZdEdu(
        edu?.data.map(({ eduCode, eduName }) => ({
          id: eduCode,
          label: eduName,
        }))
      );
    }
    if (personnelType) {
      setZdPersonnelType(
        personnelType?.data.map(({ personnelTypeCode, personnelTypeName }) => ({
          id: personnelTypeCode,
          label: personnelTypeName,
        }))
      );
    }
    if (qualificationCategory) {
      setZdQualificationCategory(
        qualificationCategory?.data.map(
          ({ qualificationCode, qualificationName }) => ({
            id: qualificationCode,
            label: qualificationName,
          })
        )
      );
    }
  }, [edu, personnelType, qualificationCategory]);

  // form validation
  const formContext = useForm({
    defaultValues: {},
    mode: "all",
    resetOptions: {
      keepDirtyValues: true, // user-interacted input will be retained
      keepErrors: false, // input errors will be retained with value update
    },
  });

  // 用户基本信息加载完成
  useEffect(() => {
    if (data) {
      formContext.reset(data);
    }
  }, [data]);

  const onSubmit = (data) => {
    console.log(data);
    LoadingRef.current.open();
    ajax({
      url: "/user/update",
      method: "put",
      data,
    })
      .then(({ msg }) => {
        NoticeRef.current.open({
          message: msg,
        });
      })
      .finally(() => {
        LoadingRef.current.close();
      });
  };

  return (
    <Box>
      {!isLoading ? (
        <Card variant="outlined">
          <CardContent>
            <FormContainer
              formContext={formContext}
              onSuccess={(data) => onSubmit(data)}
            >
              <Grid container rowSpacing={1.5} columnSpacing={3}>
                {/* 审核状态 */}
                <Grid item xs={12} sm={12}>
                  <Typography
                    sx={{ pb: 2 }}
                    color={
                      data.auditState == 0
                        ? "#d32f2f"
                        : data.auditState === -1
                        ? "#ed6c02"
                        : ""
                    }
                  >
                    {data.auditState === 0
                      ? data.reason
                      : data.auditState === -1
                      ? "信息审核中"
                      : ""}
                  </Typography>
                </Grid>
                {/* 账号 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="personnelLoginUserName"
                      label="账号:"
                      fullWidth
                      disabled
                      autoComplete="personnelLoginUserName"
                      placeholder="账号"
                      validation={blur}
                      size="small"
                    />
                  </Box>
                </Grid>
                {/* 身份证号 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="idCard"
                      label="身份证号:"
                      fullWidth
                      disabled
                      autoComplete="idCard"
                      placeholder="身份证号"
                      validation={blur}
                      size="small"
                    />
                  </Box>
                </Grid>
                {/* 姓名 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="name"
                      label="姓名:"
                      fullWidth
                      required
                      autoComplete="name"
                      placeholder="姓名"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 性别 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <SelectElement
                      name="gender"
                      label="性别:"
                      fullWidth
                      required
                      autoComplete="gender"
                      placeholder="性别"
                      validation={change}
                      size="small"
                      options={[
                        {
                          id: 1,
                          label: "男",
                        },
                        {
                          id: 2,
                          label: "女",
                        },
                      ]}
                    />
                  </Box>
                </Grid>
                {/* 专业 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="major"
                      label="专业:"
                      fullWidth
                      required
                      autoComplete="major"
                      placeholder="专业"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 学历 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <SelectElement
                      name="eduCode"
                      label="学历:"
                      fullWidth
                      required
                      autoComplete="eduCode"
                      placeholder="学历"
                      validation={change}
                      size="small"
                      options={zdEdu}
                    />
                  </Box>
                </Grid>
                {/* 人员类别 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <SelectElement
                      name="personnelTypeCode"
                      label="人员类别:"
                      fullWidth
                      autoComplete="personnelTypeCode"
                      placeholder="人员类别"
                      validation={change}
                      size="small"
                      options={zdPersonnelType}
                    />
                  </Box>
                </Grid>
                {/* 单位 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="unitName"
                      label="单位:"
                      fullWidth
                      autoComplete="unitName"
                      placeholder="单位"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 联系电话 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="contactPhone"
                      label="联系电话:"
                      fullWidth
                      autoComplete="contactPhone"
                      placeholder="联系电话"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 手机号码 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="telephone"
                      label="手机号码:"
                      fullWidth
                      required
                      autoComplete="telephone"
                      placeholder="手机号码"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 邮箱 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="email"
                      label="邮箱:"
                      fullWidth
                      autoComplete="email"
                      placeholder="邮箱"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 从业年限 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="workingYear"
                      label="从业年限:"
                      fullWidth
                      required
                      autoComplete="workingYear"
                      placeholder="从业年限"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 过往培训情况 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <SelectElement
                      name="pastTrainingSituation"
                      label="过往培训情况:"
                      fullWidth
                      required
                      autoComplete="pastTrainingSituation"
                      placeholder="过往培训情况"
                      validation={change}
                      size="small"
                      options={[
                        {
                          id: "无",
                          label: "无",
                        },
                        {
                          id: "省级培训合格",
                          label: "省级培训合格",
                        },
                        {
                          id: "国家",
                          label: "国家",
                        },
                      ]}
                    />
                  </Box>
                </Grid>
                {/* 职务 */}
                <Grid item xs={12} sm={6} lg={4}>
                  <Box>
                    <TextFieldElement
                      name="jobPosition"
                      label="职务:"
                      fullWidth
                      autoComplete="jobPosition"
                      placeholder="职务"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                {/* 住址 */}
                <Grid item xs={12} sm={12}>
                  <Box>
                    <TextFieldElement
                      name="address"
                      label="住址:"
                      fullWidth
                      autoComplete="address"
                      placeholder="住址"
                      validation={blur}
                      size="small"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\s/g, ""))
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box>
                    <Button
                      type="submit"
                      fullWidth
                      disabled={data.auditState !== 1}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {data.auditState == -1
                        ? "等待信息审核完成"
                        : "更新用户信息"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </FormContainer>
          </CardContent>
        </Card>
      ) : null}
    </Box>
  );
};
export default Info;
