import React, { Suspense as BaseSuspense } from "react";
import { useBoundaryConfig } from "./boundary-config-provider";

export const Suspense = (props) => {
  const { pendingFallback } = useBoundaryConfig();

  return <BaseSuspense fallback={pendingFallback} {...props} />;
};
