// import { useEffect } from "react";
const useScript = (resourceUrl) => {
  return new Promise((r) => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      r();
    };
  });
};
export default useScript;
