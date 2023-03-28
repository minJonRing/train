import { useRootStore } from "store/index";
import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";

import Redirect from "utils/Redirect";

// material-ui
import { Box } from "@mui/material";
import Header from "./header";
import { AllRoute } from "router/module";

// types
// import { openDrawer } from 'store/reducers/menu';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = observer(() => {
  // const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
  const {
    user: { token },
    system: { menuEnum, changeMenuEnum },
  } = useRootStore();

  const filterRoute = (data, m) => {
    data.map((el) => {
      const { name, children } = el;
      m[name] = el;
      if (children) {
        filterRoute(children, m);
      }
    });
  };
  if (!Object.keys(menuEnum).length) {
    const m = {};
    filterRoute(AllRoute, m);
    changeMenuEnum(m);
  }
  return token ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
      <Box component="main" sx={{ width: "100%", flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  ) : (
    <Redirect to="/login" />
  );
});

export default MainLayout;
