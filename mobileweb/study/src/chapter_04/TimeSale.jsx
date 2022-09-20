import React from "react";
import "./TimeSale.css";
import list from "./List";

function getDeadline(endDate) {
  let dead = new Date(endDate);
  let current = new Date();
  let deadline = dead.getTime() - current.getTime();
  let hour = Math.floor(deadline / (1000 * 60 * 60));
  let min = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60) / 1000);
  let sec = Math.floor(((deadline % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
  return hour.toString(10) + ":" + min.toString(10) + ":" + sec.toString(10);
}

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    if (this.state.liked) {
      return <div className="AfterBtn">구매 완료</div>;
    }

    return e("button", {
      onClick: () => this.setState({
        liked: true
      })
    },
        <div className="BeforeBtn">긴급 구매</div>);
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
        <LikeButton/>
      </div>
    </div>
  );
}

function TimeSale(props) {
  return (
    <div className="wrapper">
      {list.map((e, n) => {
        return (
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
