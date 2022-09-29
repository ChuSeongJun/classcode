import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./chapter_06/Counter";
import GoodBad from "./chapter_06/GoodBad";
import RealtimeText from "./chapter_06/RealtimeText";
import NotificationList from "./chapter_06/NotificationList";
import YourCounter from "./chapter_07/YourCounter";
import Accommodate from "./chapter_07/Accommodate";
import ToggleTimer from "./chapter_07/ToggleTimer";
import MyuseRef from "./chapter_07/MyuseRef";
import MyuseRef2 from "./chapter_07/MyuseRef2";
import MemoTest from "./chapter_07/MemoTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<GoodBad />*/}
    {/*<RealtimeText />*/}
    {/*<NotificationList />*/}
    {/*<YourCounter />*/}
    {/*<Accommodate />*/}
    {/*<ToggleTimer />*/}
    {/*<MyuseRef2 />*/}
    <MemoTest />
  </React.StrictMode>
);
