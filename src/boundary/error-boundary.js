import React from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary as BaseErrorBoundary } from "react-error-boundary";
import { useBoundaryConfig } from "./boundary-config-provider";

export const ErrorBoundary = (props) => {
  const {
    children,
    ignoreOnError = false,
    FallbackComponent: FallbackComponentProp,
    ...rest
  } = props;

  const { FallbackComponent, onError } = useBoundaryConfig();
  const { reset } = useQueryErrorResetBoundary();

  return (
    <BaseErrorBoundary
      onReset={reset}
      onResetKeysChange={reset}
      FallbackComponent={FallbackComponentProp || FallbackComponent}
      {...(ignoreOnError ? {} : { onError })}
      {...rest}
    >
      {children}
    </BaseErrorBoundary>
  );
};

export const ErrorFallback = (props) => {
  const { error, resetErrorBoundary, ...rest } = props;

  return (
    <button size="sm" onClick={resetErrorBoundary}>
      重试
    </button>
  );
};
