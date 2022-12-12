import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styled/todo.scss";
import AddTodo from "../components/addTodo";
import TodoList from "../components/todoList";
import { useNavigate } from "react-router";

function Todo () {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate()

  const Axios = axios.create({
    baseURL: "http://localhost:8000/todos",
    // baseURL: "https://pre-onboarding-selection-task.shop/todos",
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

  useEffect(() => {
    Axios.get()
    .then((res) => {
      if(res.status === 200) {
        setTodo(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const createTodo = (text) => {
    Axios.post("", {
      todo : text
    }).then((res) => {
      setTodo((preTodos) => [...preTodos, res.data])
    }).catch((err) => {
      console.log(err)
    })
  };

  const updateTodo = (id, todo, isCompleted) => {
    Axios.put("/" + id, {
      todo, isCompleted
    })
    .then((res) => {
      if(res.status === 200){
        Axios.get()
        .then((res) => {
          if(res.status === 200) {
            setTodo(res.data)
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  };

  //할일 삭제하기
  const deleteTodo = (id) => {
    Axios.delete("/" + id)
    .then((res) => {
      if(res.status === 204) {
        Axios.get()
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
      <div className="header">TODO</div>
      <AddTodo onAddTodo={createTodo}></AddTodo>
      <TodoList todos={todo} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo}></TodoList>
    </div>
  )
}

export default Todo