import React, { useEffect, useState } from "react";

export const useIdle = (() => {
  let timeout = null;
  return (t) => {
    const _t = t * 60 * 1000;
    const [bool, setBool] = useState(false);
    const onEvent = () => {
      setBool(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setBool(true);
      }, _t);
    };
    useEffect(() => {
      document.addEventListener("keydown", onEvent);
      document.addEventListener("mousemove", onEvent);
      return () => {
        document.removeEventListener("keydown", onEvent);
        document.removeEventListener("mousemove", onEvent);
        clearInterval(timeout);
      };
    }, []);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setBool(true);
    }, _t);
    return {
      stop: bool,
    };
  };
})();

export const usePageLeave = () => {
  const [leave, setLeave] = useState(false);
  const handler = (event) => {
    if (!window) return;
    event = event || window.event;
    // @ts-ignore
    const from = event.relatedTarget || event.toElement;
    setLeave(!from);
  };
  useEffect(() => {
    window.addEventListener("mouseout", handler);
    document.addEventListener("mouseleave", handler);
    document.addEventListener("mouseenter", handler);
    return () => {
      window.removeEventListener("mouseout", handler);
      document.removeEventListener("mouseleave", handler);
      document.removeEventListener("mouseenter", handler);
    };
  }, []);
  return { leave };
};
