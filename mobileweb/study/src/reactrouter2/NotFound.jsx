import React from "react";
import "./SecondRouter.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);

  return <div className="content">NotFound 페이지입니다.</div>;
};

export default NotFound;
