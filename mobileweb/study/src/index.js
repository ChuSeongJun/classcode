import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./chapter_06/Counter";
import GoodBad from "./chapter_06/GoodBad";
import RealtimeText from "./chapter_06/RealtimeText";
import NotificationList from "./chapter_06/NotificationList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<GoodBad />*/}
    {/*<RealtimeText />*/}
    <NotificationList />
  </React.StrictMode>
);
