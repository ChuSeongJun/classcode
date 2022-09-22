import React from "react";

const styles = {
  Wrapper: {},
  Top: {
    backgroundColor: "skyblue",
    height: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 40,
    color: "white",
  },
};

function Comment(props) {
  const color = props.color;
  return (
    <div style={styles.Wrapper}>
      <div style={styles.Top}>무비스토리</div>
      <div>
        <span>
          <img src={props.image} alt="" />
          <span>{props.title}</span>
          <span>{props.year}</span>
          <div>{props.genre}</div>
          <div>{props.sub}</div>
        </span>
      </div>
    </div>
  );
}
export default Comment;
