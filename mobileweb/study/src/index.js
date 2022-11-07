import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextApp from "./context/ContextApp";
import ContextHook from "./context/ContextHook";
import PageColor from "./context/PageColor";
import FirstRouter from "./reactrouter/FirstRouter";
import SecondRouter from "./reactrouter2/SecondRouter";
import DisplayFlex from "./Last/DisplayFlex";
import StyledButtons from "./Last/StyledButtons";
import Signal from "./Last/Signal";
import Blocks from "./Last/Blocks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);
