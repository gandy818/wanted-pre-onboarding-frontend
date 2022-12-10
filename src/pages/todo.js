import React, { useState } from "react";
import "../styled/todo.scss"

function Todo () {
  const [todo, setTodo] = useState('공부하기');
  const [readOnly, setReadOnly] = useState(true)

  const getTodo = (e) => {
    setTodo(e.target.value)
  };

  const modify = () => {
    setReadOnly(false)
  }


  return (
    <div className="todo">
      <div className="header">TODO</div>
      <div className="addTodo">
        <input type="text"></input>
        <div>추가하기</div>
      </div>
      <div className="todoList">
        <div>1</div>
        <div><input type="checkbox"></input></div>
        <input className="" type="text" readOnly={readOnly} value={todo} onChange={getTodo}></input>
        <div className="btn" onClick={modify}>수정</div>
        <div className="btn">삭제</div>
      </div>
    </div>
  )
}

export default Todo