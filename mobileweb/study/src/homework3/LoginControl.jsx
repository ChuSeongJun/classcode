import React, { useState } from "react";
import Greeting from "./Greeting"; // 인사말텍스트 컴포넌트
import LoginButton from "./LoginButton"; // 로그인버튼 컴포넌트
import LogoutButton from "./LogoutButton"; // 로그아웃버튼 컴포넌트
import "./LoginControl.css";
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인상태 state변수
  const [number, setNumber] = useState(1); //버튼 클릭 state 변수
  const [id, setId] = useState(""); //input창 입력 변수
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    console.log("버튼 클릭횟수" + number);
    console.log(isLoggedIn);
    setNumber(Number(number) + 1);
  }; // 로그인클릭
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    console.log("버튼 클릭횟수" + number);
    console.log(isLoggedIn);
    setNumber(Number(number) + 1);
  }; // 로그아웃클릭

  const handleID = (e) => {
    //onchange 변수
    setId(e.target.value); //변수 setId에 저장
  };
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
    //로그아웃 버튼 이벤트
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
    //로그인 버튼 이벤트
  }
  return (
    <div>
      <div className="login">
        <Greeting isLoggedIn={isLoggedIn} /> {button}
        <input type="text" id="id" name="id" value={id} onChange={handleID} />
        {/*    입력 받을 input창*/}
      </div>
      <h1>{id}</h1>
      {/*화면 밖에 id 출력*/}
    </div>
  );
}
export default LoginControl;
