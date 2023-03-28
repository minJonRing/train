import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useRootStore } from "store/index";
import { observer } from "mobx-react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";
import { useForm } from "react-hook-form";
import { blur } from "utils/rules";
import { ajax } from "request/index";
import md5 from "js-md5";
import { setToken, setUserInfo } from "utils/token";
import { LoadingRef } from "utils/Loading";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      建议您使用火狐、谷歌、Edge浏览器访问本网站,最小分辨率1024*768
      <br />
      技术支持服务电话：400-001-2788
    </Typography>
  );
}

const In = observer(() => {
  // router
  const navigate = useNavigate();
  // api
  const {
    user: { changeToken, changeUserInfo },
  } = useRootStore();
  // form validation
  const formContext = useForm({
    defaultValues: {
      username: "320831199712073819",
      password: "Aa123456!",
    },
    mode: "all",
  });
  // submit login from
  const onSubmit = (data) => {
    LoadingRef.current.open();
    ajax({
      url: "/login/password",
      method: "post",
      data: {
        ...data,
        password: md5(data.password),
        terminal: "personnel",
      },
    })
      .then(({ data }) => {
        const { token, user } = data;
        setToken(token);
        changeToken(token);
        setUserInfo(JSON.stringify(user));
        changeUserInfo(user);
        global.$notice.current?.open({
          message: "登录成功",
          type: "success",
        });
        navigate("/");
      })
      .finally(() => {
        LoadingRef.current.close();
      });
  };
  return (
    <Box component="div">
      <FormContainer
        formContext={formContext}
        onSuccess={(data) => onSubmit(data)}
      >
        <Typography variant="h5" color="text.secondary">
          登录
        </Typography>
        <TextFieldElement
          name="username"
          label="用户名"
          required
          fullWidth
          autoFocus
          autoComplete="username"
          placeholder="用户名"
          sx={{ mt: 2, mb: 1 }}
          validation={blur}
          onInput={(e) => (e.target.value = e.target.value.replace(/\s/g, ""))}
        />
        <PasswordElement
          name="password"
          label="密码"
          required
          fullWidth
          autoComplete="password"
          placeholder="密码"
          sx={{ mt: 2, mb: 1 }}
          validation={blur}
          onInput={(e) => (e.target.value = e.target.value.replace(/\s/g, ""))}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          登录
        </Button>
      </FormContainer>
    </Box>
  );
});

// function Forgot(props) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       username: data.get("username"),
//       password: data.get("password"),
//     });
//   };
//   return (
//     <Box component="form" onSubmit={handleSubmit} validate>
//       <Typography variant="h5" color="text.secondary">
//         找回密码
//       </Typography>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="username"
//         label="账号"
//         name="username"
//         autoComplete="username"
//         autoFocus
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="username"
//         label="手机号"
//         name="username"
//         autoComplete="username"
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="password"
//       />
//       <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
//         下一步
//       </Button>
//     </Box>
//   );
// }

export default function SignIn() {
  const [forgot, changeForgot] = useState(false);

  return (
    <Container
      component="main"
      sx={{
        width: "450px",
        m: 0,
        height: "500px",
        backgroundColor: "#fff",
      }}
    >
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Forgot /> */}
        {forgot ? null : <In />}
        <Grid container>
          <Grid item xs>
            <Button variant="text" onClick={() => changeForgot(!forgot)}>
              {forgot ? "有账号?去登录!" : "忘记密码"}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Copyright sx={{ mt: 2 }} />
    </Container>
  );
}
