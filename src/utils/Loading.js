import { useState, createRef, useImperativeHandle, useCallback } from "react";
import { Backdrop, LinearProgress } from "@mui/material";

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
        // color: "#fff",
        backgroundColor: "rgba(255,255,255,.7)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={state}
    >
      <LinearProgress sx={{ width: "100%" }} />
    </Backdrop>
  );
};

export default Loading;
