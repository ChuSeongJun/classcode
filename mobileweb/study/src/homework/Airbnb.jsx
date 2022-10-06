import React from "react";

const styles = {
  wrapper: {
    display: "flex" /* flex 형태로 배치*/,
    height: "100vh" /*높이 100vh*/,
    flexDirection: "column" /*주 라인 세로로 설정*/,
    justifyContent: "center" /*주 라인 가운데 배치*/,
  },
  image: {
    width: "100vh" /*가로 100vh*/,
    height: "60vh" /*세로 60vh*/,
    borderRadius: 25 /*모서리부분 25만큼 둥글게*/,
  },

  Text: {
    color: "white" /*색깔 흰색*/,
    fontSize: 70 /*글자 크기 70*/,
  },
};

function Comment(props) {
  //props를 설정해 가져올 변수 설정
  const color = props.color;
  return (
    <div style={styles.wrapper}>
      <img src={props.image} alt="" style={styles.image} />
      <div style={{ backgroundColor: color, height: "35vh", width: "100vh" }}>
        <div style={styles.Text}>{props.title}</div>
        <div style={styles.Text}>{props.distance}km거리</div>
        {/*props로 가져온 변수를 하나씩 불러서 저장*/}
      </div>
    </div>
  );
}
export default Comment;
