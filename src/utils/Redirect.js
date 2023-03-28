import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  });
  return null;
};
