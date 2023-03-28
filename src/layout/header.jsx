import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import {
  useLocation,
  useNavigate,
  useParams,
  useMatch,
  useMatches,
} from "react-router-dom";
import { useRootStore } from "store/index";
import { observer } from "mobx-react";
import { removeToken } from "utils/token";

const settings = [
  { name: "基本信息", value: "/user" },
  { name: "登出", value: "logout" },
];

const ResponsiveAppBar = observer(() => {
  // 用户信息
  const {
    user: { userInfo, changeToken },
    system: { menuEnum },
  } = useRootStore();
  // 路由信息
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // console.log(useLocation());
  //
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (el) => {
    const { value } = el;
    setAnchorElUser(null);
    if (value === "logout") {
      removeToken();
      changeToken("");
      navigate("/login", { replace: true });
    } else {
      navigate(value);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            {!["/"].includes(pathname) ? (
              <IconButton
                onClick={() => navigate(-1)}
                sx={{ color: "#fff", mr: 1 }}
              >
                <ArrowLeftOutlined />
              </IconButton>
            ) : null}
            <Typography>{menuEnum["exam"]}</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography textAlign="center" variant="h5">
              培训考试系统
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="设置">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userInfo.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.value}
                  onClick={() => handleClick(setting)}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});
export default ResponsiveAppBar;
