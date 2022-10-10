import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./chapter_06/Counter";
import GoodBad from "./chapter_06/GoodBad";
import RealtimeText from "./chapter_06/RealtimeText";
import NotificationList from "./chapter_06/NotificationList";
import AirbnbList from "./homework/AirbnbList";
import MovieList from "./homework2/MovieList";
import Toggle from "./homework3/Toggle";
import EventParam from "./homework3/EventParam";
import MyLotto from "./homework3/MyLotto";
import LoginControl from "./homework3/LoginControl";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<GoodBad />*/}
    {/*<RealtimeText />*/}
    {/*<NotificationList />*/}

    {/*<AirbnbList />*/}
    {/*AirbnbList 불러오기*/}
    {/*<MovieList />*/}
    {/*MovieList불러오기*/}
    {/*  <Toggle/>*/}
    {/*  <EventParam/>*/}
    <MyLotto />
    {/*  <LoginControl/>*/}
  </React.StrictMode>
);
