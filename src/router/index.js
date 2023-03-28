import { useRoutes } from "react-router-dom";
//

// project import

import { AllRoute } from "./module";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

// 生产react-route路由
export const generateRoute = (route) => {
  return route.map((el) => {
    const { children } = el;
    const Element = el.element;
    return {
      ...el,
      element: <Element />,
      children: children && generateRoute(children),
    };
  });
};

// 导出路由组建
export default () => useRoutes(generateRoute(AllRoute));
