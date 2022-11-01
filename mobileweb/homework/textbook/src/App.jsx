import React, { useState, useEffect } from "react";
import "./App.css";
const serverURL = "http://localhost:65020/users";
function App() {
  const [userData, setUserData] = useState(null);
  const [checkbtn, setCheckBtn] = useState(false);
  const [checkData, setCheckData] = useState(false);

  const getUserData = () => {
    fetch(serverURL)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .then(console.log(userData));
  };
  useEffect(getUserData, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const id = e.target.id.value;
    const passwd = e.target.passwd.value;
    console.log("Submit버튼 클릭후 서버로 POST전송");
    fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id, passwd }),
    }).then(getUserData());
  };
  const onSubmitClick = (e) => {
    //버튼을 눌렀을때 실행되는 이벤트
    e.preventDefault();

    setCheckBtn(true);

    const id = e.target.id.value;
    const passwd = e.target.passwd.value;

    console.log(id);
    console.log(passwd);

    //map을 사용해 안에 들어있는 값을 꺼내서 비교한다.
    userData.map((i, index) => {
      if (id === i.id && passwd === i.passwd) {
        setCheckData(true);
        //참이면 true로 바뀌어서 에러메시지출력
      } else {
        setCheckData(false);
        //거짓이면 false로 바뀌어서 에러메시지출력
      }
    });
  };

  return (
    <>
      <div>
        <h2>회원등록</h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름" />
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">등록</button>
        </form>
      </div>
      <p></p>
      <div>
        <h2>회원확인</h2>
        <form onSubmit={onSubmitClick}>
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">확인</button>
        </form>
      </div>
      {/*체크 버튼 누르기전까지는 false라 안보이고 누르면 상태 바뀌어서 보임*/}
      {checkbtn && (
        <div className="error">
          {/*클래스네임 error로 스타일 설정*/}
          {/*checkData가 참이면 회원으로 확인 거짓이면 그런회원은 없습니다를 출력하는 삼항연산자*/}
          {checkData ? (
            <div>회원으로 확인되었습니다.</div>
          ) : (
            <div>그런 회원은 없습니다.</div>
          )}
        </div>
      )}
      <p></p>
      <div>
        <h2>회원명단</h2>
        <ol>
          {userData === null ? (
            <p>서버에서 데이터를 가져오는중...</p>
          ) : (
            userData.map((user, i) => (
              <li key={user.keyid}>
                {" "}
                {user.name} {user.id} {user.passwd}>
              </li>
            ))
          )}
        </ol>
      </div>
    </>
  );
}

export default App;
