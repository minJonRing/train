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
import PageLoad from "utils/PageLoad/index";
// 消息提示
import Notice from "utils/Notice";
// 请求加载
import Load from "utils/Loading";

dayjs.extend(isBetween);

function App() {
  const theme = createTheme({
    components: {
      // 样式表的名字 ⚛️
      MuiTypography: {
        styleOverrides: {},
        // 规则的名字
        color: {
          // 一些 CSS
          primary: "#1976d2",
          secondary: "#9c27b0",
          error: "#1976d2",
          success: "#2e7d32",
          warning: "#ed6c02",
        },
      },
    },
  });
  return (
    // 边界错误处理
    <BoundaryConfigProvider
      pendingFallback={null}
      FallbackComponent={null}
      onError={(err) => {
        console.log(err);
      }}
    >
      <Boundary FallbackComponent={ErrorFallback} fallback={<PageLoad />}>
        {/* // <ErrorBoundary> */}
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
        {/* // </ErrorBoundary> */}
      </Boundary>
    </BoundaryConfigProvider>
  );
}

export default App;
