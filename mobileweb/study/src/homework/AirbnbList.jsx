import React from "react";
import Airbnb from "./Airbnb";

const comments = [
  { image: "서울.jpg", color: "#de3151", title: "서울", distance: 2 },
  { image: "인천.jpg", color: "#cc2d4a", title: "인천", distance: 29 },
  { image: "대구.jpg", color: "#d93b30", title: "대구", distance: 237 },
  { image: "대전.jpg", color: "#dc1a6e", title: "대전", distance: 140 },
];

function AirbnbList() {
  return (
    <div>
      {comments.map((comment) => {
        // map함수를 사용해 한개씩 불러오기
        return (
          <Airbnb
            image={comment.image}
            color={comment.color}
            title={comment.title}
            distance={comment.distance}
          />
        );
      })}
    </div>
  );
}
export default AirbnbList;
