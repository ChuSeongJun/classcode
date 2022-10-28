import React from "react";
function Card(props) {
  const { title, backgroundColor, children } = props;
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {/*타이틀이 있을경우 h1으로 title 출력*/}
      {children}
      {/*props를 가져와서 넣기*/}
    </div>
  );
}
export default Card;
