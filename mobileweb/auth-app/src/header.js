import React from "react";

function Header() {
  return React.createElement(
    //element를 만들어준다.
    "div",
    null,
    React.createElement("h1", null, "로그인"), //h1 태그 로그인만듬
    React.createElement("hr", null) //hr 태그
  );
}

export default Header;
