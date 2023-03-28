import React from "react";

const createContext = (options) => {
  const { strict = true, name } = options;

  const Context = React.createContext();

  const errorMessage = `useContext: 'context' is undefined. Seems you forgot to wrap component within the ${name}`;

  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
};

export default createContext;
