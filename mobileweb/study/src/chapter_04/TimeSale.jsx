import React from "react";
import "./TimeSale.css";
import list from "./List";
// 리스트 import

function getDeadline(endDate) {
  let dead = new Date(endDate); //끝 시간
  let current = new Date(); //지금 시간
  let deadline = dead.getTime() - current.getTime(); //남은 시간 계산
  let hour = Math.floor(deadline / (1000 * 60 * 60)); //시
  let min = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60) / 1000); //분
  let sec = Math.floor(((deadline % (1000 * 60 * 60)) % (1000 * 60)) / 1000); //초
  return hour.toString(10) + ":" + min.toString(10) + ":" + sec.toString(10); //쉽게 보게 정렬
}
//시간 정리 함수

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    if (this.state.liked) {
      return <div className="AfterBtn">구매 완료</div>;
    } //조건 충족시 구매완료로 바뀜

    return e(
      "button",
      {
        onClick: () =>
          this.setState({
            liked: true,
          }), //버튼을 누르면 state가 liked가 트루로
      },
      <div className="BeforeBtn">긴급 구매</div>
    ); //평소는 긴급구매 버튼
  }
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="cardimg" alt="product" />
      <div className="cardbody">
        <h2 className="cardtime"> {props.time} 마감예정! </h2>
        <h2 className="cardtitle"> {props.title} </h2>
        <p className="carddescription">{props.description} </p>
        <h3 className="cardprice">
          <del style={{ color: "gray" }}>{props.oldprice}</del> {props.price}
        </h3>
        <LikeButton />
      </div>
    </div>
  );
}

function TimeSale(props) {
  return (
    <div className="wrapper">
      {list.map((e, n) => {
        return (
          //n을 인덱스로 받고
          //e를 인수로해서 각 자리에 있는 값들을 한개씩 불러와서 저장한다.
          <div key={n}>
            <Card
              img={e.img}
              time={getDeadline(e.time)}
              title={e.title}
              description={e.description}
              oldprice={e.oldprice}
              price={e.price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TimeSale;
