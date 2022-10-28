import React from "react";
import Card from "./Card";
import "./ProfileCard.css";
import { CardList } from "./CardList";

function ProfileCard(props) {
  const ClickBtn = () => {
    //버튼 클릭 이벤트
    alert(`버튼이 눌렸다.`);
  };
  return (
    <div>
      {CardList.map((i, index) => {
        // CardList배열에서 한개씩 꺼내와서 출력
        return (
          <Card backgroundColor={i.backgroundColor}>
            <p>{i.text}</p>
            <button onClick={ClickBtn}>{i.buttonText}</button>
          </Card>
        );
      })}
    </div>
  );
}

export default ProfileCard;
