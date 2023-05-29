import { useState, createRef, useImperativeHandle, useCallback } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const LoadingRef = createRef();

global.$loading = LoadingRef;

const Loading = () => {
  const [state, setState] = useState(false);

  const close = useCallback(() => setState(false), []);

  const open = useCallback(() => {
    setState(true);
  }, []);

  useImperativeHandle(LoadingRef, () => ({ close, open }), [close, open]);

  return (
    <Backdrop
      sx={{
        display: "block",
        backgroundColor: "rgba(255,255,255,.7)",
        display: "flex",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={state}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default Loading;
