import React from "react";
function LogoutButton(props) {
  return <button onClick={props.onClick}> 로그아웃</button>;
  //porps로 이벤트 가져와 로그아웃 이벤트
}
export default LogoutButton;
