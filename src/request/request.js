import axios from "axios";
import { store } from "store/index";
import { NoticeRef } from "utils/Notice";
// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // url = base url + request url
  // baseURL: "http://org.ohras.cn/learning/api", // url = base url + request url

  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 6000000000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (!!store.user.token) {
      config.headers["token"] = store.user.token;
    }
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    const { size, msg, status } = res;

    if (size) {
      return res;
    }

    if (![200].includes(status)) {
      NoticeRef?.current?.open({
        message: msg || "网络波动,请联系管理员!",
        type: "error",
      });
      if ([401].includes(status)) {
        console.log(NoticeRef);
        NoticeRef?.current?.logout();
      }
      return res;
    } else {
      return res;
    }
  },
  (error) => {
    // 网络
    return Promise.reject(error);
  }
);

export default service;
