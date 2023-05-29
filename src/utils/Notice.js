import {
  useState,
  createRef,
  useImperativeHandle,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { Alert, Snackbar } from "@mui/material";
import { useRootStore } from "store/index";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "utils/token";

export const NoticeRef = createRef();

global.$notice = NoticeRef;

const Notice = observer(() => {
  const {
    user: { changeToken },
  } = useRootStore();
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const time = useRef(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("info");
  //! Bug  Snackbar 设置自动隐藏 功能需要提供 onClose 事件 但是点击页面一下就会触发onClose事件 无奈自己实现
  useEffect(() => {
    if (state) {
      time.current = setTimeout(() => {
        setState(false);
      }, 2000);
    }
    return () => {
      clearTimeout(time.current);
      time.current = null;
    };
  }, [state, type]);
  const logout = useCallback(() => {
    changeToken("");
    removeToken();
    navigate("/login");
  });

  const close = useCallback(() => setState(false), []);

  const open = useCallback(({ message, type }) => {
    type && setType(type);
    setMessage(message);
    setState(true);
  }, []);

  useImperativeHandle(NoticeRef, () => ({ close, open, logout }), [
    close,
    open,
    logout,
  ]);

  return (
    <Snackbar
      message={message}
      open={state}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert onClose={close} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
});

export default Notice;
