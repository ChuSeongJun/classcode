import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< Updated upstream
import Counter from "./chapter_06/Counter";
import GoodBad from "./chapter_06/GoodBad";
import RealtimeText from "./chapter_06/RealtimeText";
import NotificationList from "./chapter_06/NotificationList";
=======

import AirbnbList from "./homework/AirbnbList";
import MovieList from "./homework2/MovieList";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    {/*<GoodBad />*/}
    {/*<RealtimeText />*/}
    <NotificationList />
=======
    <AirbnbList />
    {/*AirbnbList 불러오기*/}
    {/*<MovieList />*/}
    {/*MovieList불러오기*/}
>>>>>>> Stashed changes
  </React.StrictMode>
);
