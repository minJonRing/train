import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";
import { userUserBase } from "services/useHooks";
import { useState } from "react";
import { useEffect } from "react";
const Info = () => {
  const { data, isLoading } = userUserBase();
  const [edit, setEdit] = useState(true);
  const [form, setForm] = useState({});
  useEffect(() => {
    console.log(data);
    setForm(data);
  }, [data]);
  const labelSx = { width: "140px", mb: 0 };
  return (
    <Box>
      {!isLoading ? (
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    账号:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    defaultValue={form.personnelLoginUserName}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    姓名:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.name}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    性别:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.gender}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    身份证:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.idCard}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    专业:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.major}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    学历:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.eduName}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    人员类别:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.personnelTypeName}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    单位:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.unitName}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    联系电话:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.contactPhone}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    手机号码:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.telephone}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    邮箱:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.email}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    从业年限:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.workingYear}
                    id="personnelLoginUserName"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    过往培训情况:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.email}
                    id="pastTrainingSituation"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    职务:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.jobPosition}
                    id="pastTrainingSituation"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography gutterBottom variant="h6" sx={labelSx}>
                    住址:
                  </Typography>
                  <TextField
                    required
                    disabled={!edit}
                    value={form.address}
                    id="pastTrainingSituation"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : null}
    </Box>
  );
};
export default Info;
