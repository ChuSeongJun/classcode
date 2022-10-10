import React, { useState } from "react";
import Greeting from "../chapter_08/Greeting";
import LoginButton from "../chapter_08/LoginButton";
import LogoutButton from "../chapter_08/LogoutButton";
function LoginCont() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}
export default LoginCont;
