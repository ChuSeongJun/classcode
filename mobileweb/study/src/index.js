import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDoList from "./homework4/ToDoList";
import ToDoList2 from "./use/ToDoList2";
import SignUp from "./chapter_09/SignUp";
import PasswordValid from "./chapter_09/PasswordVaild";
import LoginControl from "./homework3/LoginControl";
import LoginCont from "./chapter_08/LoginCont";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<LoginControl />*/}
    <LoginCont />
  </React.StrictMode>
);
