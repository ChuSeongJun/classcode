import React, { useEffect, useRef, useState } from "react";
function MyLotto() {
  const numOfLotto = useRef(1);
  const [number, setNumber] = useState("1"); //숫자 변환하기위해 state 변수 선언

  useEffect(() => {
    console.log(">>> 마운트되었습니다. !!!");
    return () => {
      console.log(">>> 언마운트되었습니다 !!!");
    };
  }, []);
  // deps값이 비어있으면 처음 마운트될때 호출된다.
  //   return값에 저렇게 넣으면 언마운트될때 언마운트됐다고 콘솔창에 뜬다.

  useEffect(() => {
    console.log(">>> 랜더링되었습니다. !!!");
  });
  //이렇게 dep파라미러를 아예 넣지 않으면 랜더링될때마다 출력이 된다.
  const handler = (str, event) => {
    console.log(number + "회차 " + str + event.target.value);
    alert(number + "회차 " + str + event.target.value);
    setNumber(Number(number) + 1);
    //몇회차 출력을 하고 다음 클릭할때 숫자를 늘리기위해 +1을 더해준다.
  };

  return (
    <button value="홍길동" onClick={(event) => handler("당첨자: ", event)}>
      {/*버튼 클릭시 handler 실행*/}
      당첨자확인
    </button>
  );
}
export default MyLotto;
