import React from "react";
import { ErrorBoundary } from "./error-boundary";
import { Suspense } from "./suspense";

export const Boundary = (props) => {
  const { children, fallback, ...rest } = props;

  return (
    <ErrorBoundary {...rest}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
