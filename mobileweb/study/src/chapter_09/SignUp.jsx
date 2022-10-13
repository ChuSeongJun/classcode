import React, { useState } from "react";
import "./SignUp.css";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  const [tavalue, setTaValue] = useState("요청사항을 입력하세요");

  const handleChangeName = (event) => {
    // 이름을 입력하면 state를 통해 관리됨.
    setName(event.target.value);
  };

  const handleChangeTextArea = (event) => {
    // textarea 입력값 관리
    setTaValue(event.target.value);
  };

  const handleChangeGender = (event) => {
    // 성별관리
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}, 요청사항: ${tavalue}`);
    event.preventDefault();
  };

  // submit 이벤트를 발생시키는 기본동작을 막음
  // (즉, 이부분에서 값을 alert 으로 출력만 하고싶을 경우임)
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <br />
      <label>
        <textarea value={tavalue} onChange={handleChangeTextArea} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
export default SignUp;
