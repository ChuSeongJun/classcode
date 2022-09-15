import React from "react";

function Input() {
  return React.createElement(
    "div",
    null,
    React.createElement("span", null, "사용자 ID : "), //span 태그로 사용자 ID
    React.createElement("input", {
      type: "email",
      placeholder: "이메일을 넣으세요",
    }), //input창을 만들고 타입은 email placeholder에 이메일을 넣으세요를 넣는다
    React.createElement("br", null),
    React.createElement("span", null, "비밀 번호 : "), //span 비밀번호
    React.createElement("input", {
      type: "password",
      placeholder: "영숫자를 혼합하여",
    }), //input창을 만들고 타입은 email placeholder에 영숫자를 혼합하여를 넣는다
    React.createElement("button", null, "완료")
  );
}

export default Input;
