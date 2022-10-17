import React, { useCallback, useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  //값 변수 설정
  const [inputItem, setInputItem] = useState("");
  //설정한 리스트 저장하는 배열 객체
  const [itemList, setItemList] = useState([
    { id: "1", value: "리액트듣기" },
    { id: "2", value: "점심먹기" },
    { id: "3", value: "과제하기" },
  ]);
  //변경 할 각 아이디에 false 설정
  const [isEdit, setIsEdit] = useState({ 1: false, 2: false, 3: false });
  //변경 할 결과 설정
  const [editResult, setEditResult] = useState("");

  //버튼 클릭시 이벤트 설정
  const EditFinish = (id) => {
    let newList = itemList;

    //새 리스트 설정
    newList = newList.map((v, i) => {
      if (v.id === id) {
        //만약 아이디와 리스트 아이디가 같으면
        //새 리스트에 값 넣기
        newList[i] = { id: id, value: editResult };
      }
    });
    //값 넣기
    setEditResult(newList);
    //그 후 초기화
    setEditResult("");
    EditList(id);
  };

  const EditList = (id) => {
    const ListNumber = isEdit[id];
    //기존 배열 불러오고 아이디
    setIsEdit({ ...isEdit, [id]: !ListNumber });
  };

  //값 변경 onChange 함수
  const handleChange = useCallback((e) => {
    setEditResult(e.target.value);
  }, []);

  //배열 추가
  const AddToDoList = () => {
    //초기 설정인 false 각 id에 저장 , 원래 배열 불러오기
    setIsEdit({ ...isEdit, [itemList.length + 1]: false });

    setItemList((prevItem) => {
      //값 추가시 넣을 값 설정
      return [
        {
          id: itemList.length + 1,
          value: inputItem,
        },
        ...prevItem,
      ];
    });
    //값 초기화
    setInputItem("");
  };

  //배열 객체 삭제
  const DeleteToDoList = (id) => {
    setItemList((itemList) =>
      //filter로 아이디 조건 일치하는 것 확인하고 삭제후 리턴
      itemList.filter((itemList) => itemList.id !== id)
    );
  };

  return (
    <div className="container">
      <h1> To-Do List </h1>
      <div className="add-elements">
        {/*할 일 추가 값 넣기*/}
        <input
          id="add"
          value={inputItem}
          onChange={(event) => setInputItem(event.target.value)}
        />
        {/*onClick 이벤트 설정*/}
        <button id="btn" onClick={AddToDoList}>
          할일추가
        </button>
      </div>
      <div id="element-list">
        <ul id="list">
          {/*아이템 리스트에 있는 것 map으로 순차 순환*/}
          {itemList.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                {/*이미지 클릭시 DeleteToDoList 시작*/}
                <img
                  src="trash.jpg"
                  onClick={() => DeleteToDoList(item.id)}
                  alt="trash"
                />
                {/*이미지 클릭시 EditList 시작*/}
                <img
                  src="pen.jpg"
                  onClick={() => EditList(item.id)}
                  alt="pen"
                />
                {isEdit[item.id] && (
                  <div>
                    <input
                      type="text"
                      value={editResult}
                      onFocus={() => console.log("focus")}
                      onChange={handleChange}
                    />
                    {/*버튼 클릭시 EditFinish 시작*/}
                    <button onClick={() => EditFinish(item.id)}>
                      수정 완료
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default ToDoList;
