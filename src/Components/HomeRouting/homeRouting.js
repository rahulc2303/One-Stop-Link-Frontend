import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeRouting = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && !auth.authenticate) {
      navigate(`/`);
    }
  }, []);

  return null;
};

export default HomeRouting;
