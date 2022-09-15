import { LoginForm } from "./LoginForm";
import React from "react";
import "./Login.css";
function Login() {
  return (
    <div>
      <h1>로그인</h1>
      <hr />
      {LoginForm.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.title}</span>
            <input type="form" placeholder={item.placeholder} />
          </div>
        );
      })}
      <button>완료</button>
    </div>
  );
}
export default Login;
