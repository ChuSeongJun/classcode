import React from "react";
import Movie from "./Movie";

const comments = [
  {
    image: "movie1.jpg",
    color: "#a88888",
    title: "마이 네임",
    sub: "아빠를 잃었다. 그것도 바로 눈앞에서. 남은 딸은 결심한다. 반드시 내 손으로 복수하겠노라고. 목표를 위해서라면 방법은 상관없다. 마약 조직의 언더커버가 되어 경찰에 잠입하는 것이라 해도.",
    year: 2021,
    genre: "드라마",
  },
  {
    image: "movie2.jpg",
    color: "#7973bc",
    title: "기생충",
    sub: "큰 문제 없이 박 사장의 딸 다혜의 과외를 시작한 기우. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있는데...",
    year: 2019,
    genre: "영화",
  },
  {
    image: "movie3.jpg",
    color: "#35b233",
    title: "반지의 제왕",
    sub: "마침내 프로도와 그의 친구들, 엘프족인 레골라스, 난장이족 김리, 두명의 인간 전사 아라곤과 보로미르, 그리고 마법사 간달프로 구성된 반지 원정대가 길고도 험난한 여정을 떠나게 되는데...",
    year: 2001,
    genre: "영화",
  },
  {
    image: "movie4.jpg",
    color: "#ff050d",
    title: "토르 러브 앤 썬더",
    sub: "이너피스를 위해 자아 찾기 여정을 떠난 천둥의신 토르, 그러나 우주의 모든 신을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나버리고 마는데...",
    year: 2022,
    genre: "영화",
  },
];

function MovieList() {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Movie
            image={comment.image}
            color={comment.color}
            title={comment.title}
            sub={comment.sub}
            year={comment.year}
            genre={comment.genre}
          />
          // map함수를 사용해 한개씩 불러오기
        );
      })}
    </div>
  );
}
export default MovieList;
