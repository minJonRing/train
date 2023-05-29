import React from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary as BaseErrorBoundary } from "react-error-boundary";
import { useBoundaryConfig } from "./boundary-config-provider";
import ErrorPage from "./error-page/index";

export const ErrorBoundary = (props) => {
  const { children, FallbackComponent, ...rest } = props;

  const { FallbackComponent: Fallback, onError } = useBoundaryConfig();
  const { reset } = useQueryErrorResetBoundary();

  return (
    <BaseErrorBoundary
      onReset={reset}
      onResetKeysChange={reset}
      FallbackComponent={FallbackComponent || Fallback}
      {...{ onError }}
      {...rest}
    >
      {children}
    </BaseErrorBoundary>
  );
};

export const ErrorFallback = (props) => {
  return <ErrorPage {...props} />;
};
