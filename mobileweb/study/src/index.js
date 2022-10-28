import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PassingCount from "./homework9/homework9-1/PassingCount";
import ProfileCard from "./homework9/homework9-2/ProfileCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<PassingCount />*/}
    <ProfileCard />
  </React.StrictMode>
);
