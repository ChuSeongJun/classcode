import React, { useState } from "react";
import "./ToDoList.css";
function ToDoList() {
  const [inputItem, setInputItem] = useState("");
  const [itemList, setItemList] = useState([
    { id: "1", value: "리액트듣기" },
    { id: "2", value: "점심먹기" },
    { id: "3", value: "과제하기" },
  ]);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localcontent, setLocalContent] = useState("");

  const onEdit = () => {
    const nextTodoList = itemList.map((item) =>
      item.id === itemList.id ? { ...item, inputItem: localcontent } : item
    );
    setItemList(nextTodoList);
  };

  const AddToDoList = () => {
    setItemList((prevItem) => {
      console.log(itemList.length + 1, inputItem);
      return [
        {
          id: itemList.length + 1,
          value: inputItem,
        },
        ...prevItem,
      ];
    });
    setInputItem("");
  };

  const DeleteToDoList = (id) => {
    setItemList((itemList) =>
      itemList.filter((itemList) => itemList.id !== id)
    ); // 키가 중요하게 사용되는 순간!!
    console.log(itemList);
  };

  return (
    <div className="container">
      <h1> To-Do List </h1>
      <div className="add-elements">
        <input
          id="add"
          value={inputItem}
          onChange={(event) => setInputItem(event.target.value)}
        />
        <button id="btn" onClick={AddToDoList}>
          할일추가
        </button>
      </div>
      <div id="element-list">
        <ul id="list">
          {itemList.map((item) => {
            return (
              <li key={item.id}>
                {isEdit ? (
                  <>
                    <textarea
                      value={localcontent}
                      onChange={(e) => setLocalContent(e.target.value)}
                    />
                  </>
                ) : (
                  <>{item.value}</>
                )}
                {isEdit ? (
                  <>
                    <button onClick={toggleIsEdit}>수정 취소</button>
                    <button onClick={onEdit}>수정 완료</button>
                  </>
                ) : (
                  <></>
                )}
                <img
                  src="trash.jpg"
                  onClick={() => DeleteToDoList(item.id)}
                  alt=""
                ></img>
                <img src="pen.jpg" onClick={toggleIsEdit} alt=""></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default ToDoList;
