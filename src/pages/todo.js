import React, { useState } from "react";
import axios from "axios"
import "../styled/todo.scss"

function Todo () {
  const [todo, setTodo] = useState('공부하기');
  const [readOnly, setReadOnly] = useState(true)

  const Axios = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "https://pre-onboarding-selection-task.shop/",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
  });

  const getTodo = (e) => {
    setTodo(e.target.value)
  };

  const createTodo = () => {
    Axios.post("/todos", {
      todo : "string"
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const modifyTodo = () => {
    setReadOnly(false)
  }


  Axios.get("/todos")
    .then((res) => {
      console.log(res)
  }).catch((err) => {
    console.log(err)
  })



  return (
    <div className="todo">
      <div className="header">TODO</div>
      <div className="addTodo">
        <input type="text"></input>
        <div onClick={createTodo}>추가하기</div>
      </div>
      <div className="todoList">
        <div>1</div>
        <div><input type="checkbox"></input></div>
        <input className="" type="text" readOnly={readOnly} value={todo} onChange={getTodo}></input>
        <div className="btn" onClick={modifyTodo}>수정</div>
        <div className="btn">삭제</div>
      </div>
    </div>
  )
}

export default Todo