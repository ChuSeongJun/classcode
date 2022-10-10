import React from "react";
function LoginButton(props) {
  return <button onClick={props.onClick}> 로그인 </button>;
  //porps로 이벤트 가져와 로그인 이벤트
}
export default LoginButton;
