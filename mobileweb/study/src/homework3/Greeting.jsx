import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn)
    return <UserGreeting />; //isLoggedIn 상태에 따른 조건부 렌더링
  else return <GuestGreeting />;
}
export default Greeting;
