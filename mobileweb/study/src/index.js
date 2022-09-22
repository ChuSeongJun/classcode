import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TimeSale from "./chapter_04/TimeSale";
// TimesSale import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimeSale />
      {/*TimeSale.jsx 파일 불러옴*/}
  </React.StrictMode>
);
