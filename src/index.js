import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      // “等待”代码加载
      suspense: true,
      // 窗口获得焦点时重新获取数据
      refetchOnWindowFocus: false,
      // 是否错误捕获
      useErrorBoundary: true,
      // 过期时间
      staleTime: 5 * 60 * 1000,
      // 失败重试 false不重试 true 无限重试 number设置重试次数
      retry: 0,
    },
  },
  /**
   * refetchOnWindowFocus 窗口获得焦点时重新获取数据
   * staleTime 过多久重新获取服务端数据
   * cacheTime 数据缓存时间 默认是 5 * 60 * 1000 5分钟
   */
});
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryConfig}>
    <App />
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
