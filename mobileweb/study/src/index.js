import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDoList from "./homework4/ToDoList";
import ToDoList2 from "./use/ToDoList2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoList2 />
  </React.StrictMode>
);
