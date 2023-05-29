import React, { useContext, createContext, useMemo } from "react";

const DEFAULT_CONFIG = {
  pendingFallback: null,
  FallbackComponent: () => null,
  onError: () => {},
};

const Context = createContext(DEFAULT_CONFIG);

export const useBoundaryConfig = () => useContext(Context);

export const BoundaryConfigProvider = (props) => {
  const { children, pendingFallback, FallbackComponent, onError } = props;
  const config = useMemo(
    () => ({
      pendingFallback,
      FallbackComponent,
      onError,
    }),
    [pendingFallback, FallbackComponent, onError]
  );

  return <Context.Provider value={config}>{children}</Context.Provider>;
};
