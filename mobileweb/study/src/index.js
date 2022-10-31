import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextApp from "./context/ContextApp";
import ContextHook from "./context/ContextHook";
import PageColor from "./context/PageColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageColor />
  </React.StrictMode>
);
