import service from "./request";
import { useState } from "react";

export const ajax = (option = {}) => {
  const _option = {
    method: "get",
    responseType: "json",
    ...option,
  };
  const { method, data } = _option;
  if (["get", "delete"].includes(method)) {
    _option.params = data;
  }

  return service(_option);
};

export const useAjax = (option) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCatch, setIsCatch] = useState(false);
  isLoading &&
    ajax(option)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(err);
        setIsCatch(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  return {
    data,
    isLoading,
    isCatch,
  };
};

export const useAjaxSync = (initUrl) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCatch, setIsCatch] = useState(false);
  return (option) => {
    const { url } = option;
    const u = url || initUrl;
    ajax({ ...option, url: u })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(err);
        setIsCatch(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return {
      data,
      isLoading,
      isCatch,
    };
  };
};
