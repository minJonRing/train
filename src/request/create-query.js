import { useQuery } from "@tanstack/react-query";
import Services from "services/index";

export function createQuery(defaultOptions) {
  const getKey = (variables) => {
    const { queryKey } = defaultOptions;
    const key = [
      ...(typeof queryKey === "function" ? queryKey() : queryKey),
      ...(variables ? [JSON.parse(JSON.stringify(variables))] : []),
    ];
    return key;
  };

  const Query = (options) => {
    const { queryFn, variables, ...mergedOptions } = {
      ...defaultOptions,
      ...options,
    };

    const apis = Services;
    return useQuery({
      queryKey: getKey(variables),
      queryFn: (context) => queryFn({ ...context, apis, variables }),
      ...mergedOptions,
    });
  };

  Query.select = (select) => {
    return (options) => {
      const mergedOptions = { ...defaultOptions, ...options, select };

      return Query(mergedOptions);
    };
  };

  Query.getKey = getKey;

  return Query;
}
