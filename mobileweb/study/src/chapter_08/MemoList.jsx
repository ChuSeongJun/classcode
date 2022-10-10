import React from "react";
function MemoList() {
  const todoList = ["write article", "read article", "Review article"];
  const totalTask = todoList.length;
  return (
    <div>
      <h1 style={{ color: "green" }}> GeeksForGeeks </h1>
      <b>
        {totalTask > 0 ? (
          <h2>The user has total {totalTask} task pending</h2>
        ) : (
          <h2>The user has not any task pending</h2>
        )}
      </b>
    </div>
  );
}
export default MemoList;
