import React from "react";
import "../styled/todoListItem.scss"
import UpdateTodo from "../components/updateTodo";
import DeleteTodo from "../components/deleteTodo";

function TodoListItem({todos}) {

  return (
    <div className="todoListItem">
      <input type="checkbox" defaultChecked={todos.isCompleted}></input>
      <div>{todos.todo}</div>
      <UpdateTodo></UpdateTodo>
      <DeleteTodo></DeleteTodo>
    </div>
  )
}

export default TodoListItem;