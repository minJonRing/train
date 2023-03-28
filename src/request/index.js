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
  const [data, changeData] = useState();
  !data &&
    ajax(option).then(({ data }) => {
      changeData(data);
    });

  return { data };
};
