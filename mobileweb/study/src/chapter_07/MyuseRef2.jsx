import React, { useEffect, useRef } from "react";

function MyuseRef2() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`로그인 ID: ${inputRef.current.value}`);
    console.log(`입력: ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="자동으로 포커스되죠?" />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default MyuseRef2;
