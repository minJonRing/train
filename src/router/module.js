import { lazy } from "react";
// template
import Layout from "layout/index";
import Outlet from "modules/outlet";
// router
import Logout from "../modules/logout/router";

const BaseRoute = [
  {
    path: "/",
    name: "Home",
    element: Layout,
    hidden: true,
    children: [
      {
        path: "/",
        name: "HomeBase",
        element: lazy(() => import("modules/home/index")),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    element: lazy(() => import("views/login/index")),
    meta: {
      title: "登录",
    },
  },
  Logout,
  {
    path: "*",
    element: lazy(() => import("views/login/index")),
  },
];

export const syncRoute = [
  {
    path: "/user",
    name: "User",
    element: Layout,
    children: [
      {
        path: "",
        name: "UserBase",
        element: lazy(() => import("modules/user/index")),
      },
    ],
  },
  {
    path: "/train",
    name: "Train",
    element: Layout,
    children: [
      {
        path: "",
        name: "TrainBase",
        element: lazy(() => import("modules/train/index")),
      },
      {
        path: ":id",
        name: "TrainBaseInfo",
        element: lazy(() => import("modules/train/detail/index")),
        children: [],
      },
      {
        path: ":id/:videoId",
        name: "TrainVideo",
        element: lazy(() => import("modules/train/video/index")),
      },
    ],
  },
  {
    path: "/exam",
    name: "Exam",
    element: Layout,
    children: [
      {
        path: "",
        name: "ExamBase",
        element: lazy(() => import("modules/exam/index")),
      },
      {
        path: "imitate/:examId",
        pathname: "ExamTest",
        element: lazy(() => import("modules/exam/imitate/index")),
      },
      {
        path: "paper/:examId/:id",
        pathname: "ExamPaper",
        element: lazy(() => import("modules/exam/paper/index")),
      },
      {
        path: "answer/:examId/:id",
        pathname: "ExamAnswer",
        element: lazy(() => import("modules/exam/answer/index")),
      },
    ],
  },
];

// 总路由
export const AllRoute = [...BaseRoute, ...syncRoute];

// 过滤路由函数
export const filterRouteFn = (route = []) => {
  return route
    .filter(({ hidden }) => {
      return !hidden;
    })
    .map((el) => {
      const { children } = el;
      return {
        ...el,
        children: children && children.length ? filterRouteFn(children) : null,
      };
    });
};
