import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../styled/todo.scss";
import AddTodo from "../components/addTodo";
import TodoList from "../components/todoList";
import { useNavigate } from "react-router";

function Todo () {
  const [todo, setTodo] = useState([]);
  const [readOnly, setReadOnly] = useState(true)
  const navigate = useNavigate()

  const Axios = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "https://pre-onboarding-selection-task.shop/",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
  });

  //토큰이 없을 시 메인화면으로 리다이렉트
  useEffect(() => {
    if(!localStorage.getItem("access_token")){
      navigate("/")
    }
  }, []);

  //초기 리스트 뿌려주기
  useEffect(() => {
    Axios.get("/todos")
    .then((res) => {
      if(res.status === 200) {
        setTodo(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  //할일 추가하기
  const createTodo = (text) => {
    Axios.post("/todos", {
      todo : text
    }).then((res) => {
      setTodo((preTodos) => [...preTodos, res.data])
    }).catch((err) => {
      console.log(err)
    })
  };

  //할일 수정하기
  const updateTodo = (id, todo, isCompleted) => {
    Axios.put("/todos/" + id, {
      todo, isCompleted
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  //할일 삭제하기
  const deleteTodo = (id) => {
    Axios.delete("/todos/" + id)
    .then((res) => {
      if(res.status === 204) {

        // getTodo로 갱신된 리스트 뿌려주기
        Axios.get("/todos")
        .then((res) => {
          if(res.status === 200) {
            setTodo(res.data)
          }
        }).catch((err) => {
          console.log(err)
        })

      }
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div className="todo">
      <div className="header" onClick={deleteTodo}>TODO</div>
      <AddTodo onAddTodo={createTodo}></AddTodo>
      <TodoList todos={todo} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo}></TodoList>
    </div>
  )
}

export default Todo