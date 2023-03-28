import * as React from "react";
import { useRootStore } from "store/index";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { useAdminUrl } from "services/useHooks";

import Left from "./left";
import Right from "./right";

import Redirect from "utils/Redirect";
import { useState } from "react";

import { SelectList, Users } from "modules/auto/index";

const Login = ({ url }) => {
  const {
    user: { token },
  } = useRootStore();
  const matches = useMediaQuery("(max-width:1000px)");
  // const { data } = useAdminUrl();
  const data = {};

  //
  const [form, setForm] = useState({
    name: "涂乔荣",
  });
  return token ? (
    <Redirect to="/" />
  ) : (
    <SnackbarProvider>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#70e1f5",
          backgroundImage: "linear-gradient(90deg, #70e1f5, #ffd194)",
          backgroundsize: "cover",
        }}
      >
        {matches ? null : <Left url={data.data} />}
        <Right />
        {/* <SelectList
          value={form.name}
          onInput={(e) => setForm({ ...form, name: e.target.value })}
          onSelect={(value) => setForm({ ...form, name: value })}
        /> */}
        {/* <Users /> */}
      </Box>
    </SnackbarProvider>
  );
};

export default Login;
