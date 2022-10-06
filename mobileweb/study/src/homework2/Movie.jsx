import React from "react";

const styles = {
  Wrapper: {
    width: "100vh",
    height: "100vh",
    //  전체사이즈를 100vh 100vh로 설정
  },
  Top: {
    backgroundColor: "skyblue" /*제일 위 헤더부분 배경색*/,
    height: "10vh" /*10vh만큼 높이*/,
    width: "100vh" /*100vh만큼 가로*/,
    display: "flex" /*flex로 설정*/,
    flexDirection: "column" /*주 라인을 세로로 설정*/,
    justifyContent: "center" /*주라인의 가운데에 위치*/,
    fontSize: 40 /*글자 크기 40*/,
    color: "white" /*색깔 흰색*/,
    padding: 10 /*패딩 10*/,
  },
  Box: {
    display: "flex" /*flex형태로 배치*/,
  },
  Img: {
    height: "60vh" /*60vh만큼 높이*/,
    width: "30vh" /*30vh만큼 가로*/,
  },
  Title: {
    fontSize: 40 /*글자 크기 40*/,
    padding: 20 /*패딩 20*/,
    color: "yellow" /*색깔 노란색*/,
  },
  Year: {
    fontSize: 20 /*글자 크기 20*/,
  },
  Genre: {
    padding: 20 /*패딩 20*/,
    fontSize: 20 /*글자크기 20*/,
  },
  Sub: {
    fontSize: 20 /*글자 크기 20*/,
    padding: 20 /*패딩 20*/,
  },
};

function Comment(props) {
  //props를 설정해 가져올 변수 설정
  const color = props.color;
  return (
    <div style={styles.Wrapper}>
      <div style={styles.Top}>무비스토리</div>
      <div>
        <span style={styles.Box}>
          <img src={props.image} alt="" style={styles.Img} />
          <div style={{ backgroundColor: color }}>
            <span style={styles.Title}>{props.title}</span>
            <span style={styles.Year}>{props.year}</span>
            <div style={styles.Genre}>{props.genre}</div>
            <div style={styles.Sub}>{props.sub}</div>
          </div>
          {/*props로 가져온 변수를 하나씩 불러서 저장*/}
        </span>
      </div>
    </div>
  );
}
export default Comment;
