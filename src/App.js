import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RootStoreProvider } from "store/index";
import "simplebar-react/dist/simplebar.min.css";
import "./App.css";

import ScrollTop from "components/ScrollTop";
import { HashRouter } from "react-router-dom";
import Router from "router/index";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

//边界错误
import {
  Boundary,
  BoundaryConfigProvider,
  ErrorFallback,
} from "boundary/index";
import Loader from "utils/Loader";
// 消息提示
import Notice from "utils/Notice";
// 请求加载
import Load from "utils/Loading";

dayjs.extend(isBetween);

function App() {
  const theme = createTheme({
    overrides: {
      // 样式表的名字 ⚛️
      MuiTypography: {
        // 规则的名字
        color: {
          // 一些 CSS
          primary: {
            color: "#1976d2",
          },
          secondary: {
            color: "#9c27b0",
          },
          error: {
            color: "#1976d2",
          },
          success: {
            color: "#2e7d32",
          },
          warning: {
            color: "#ed6c02",
          },
        },
      },
    },
  });
  return (
    // 边界错误处理
    <BoundaryConfigProvider
      pendingFallback={null}
      FallbackComponent={ErrorFallback}
      onError={(err) => {}}
    >
      <Boundary fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <Load />
          {/* router */}
          <HashRouter>
            {/* store */}
            <RootStoreProvider>
              <Notice />
              {/* 切换路由回到顶部 */}
              <ScrollTop>
                <Router />
              </ScrollTop>
            </RootStoreProvider>
          </HashRouter>
        </ThemeProvider>
      </Boundary>
    </BoundaryConfigProvider>
  );
}

export default App;
