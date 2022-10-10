import React, {useEffect, useState} from "react";
function Toggle(props) {
    const [isToggleOn, setIsToggle] = useState(true);

    function handleClick( ) {
        setIsToggle((isToggleOn) => !isToggleOn);
        //버튼을 누르면 현재 상태에서 반대 상태로 전환
        console.log("토글상태: ", isToggleOn);
        // isToggleOn 출력
    }
    useEffect(() => {
        console.log("랜더링 될때마다 ",isToggleOn);
        //useEffect를 사용하여 랜더링 될때마다 IsToggleOn 출력
    });

    return <button onClick={ handleClick }>
        {isToggleOn ? "클릭A" : "클릭B"}
        {/*삼항연산자 참이면 클릭A 아니면 클릭B*/}
    </button>;
}
export default Toggle;