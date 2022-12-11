import React from "react";
import TodoListItem from "./todoListItem";

function TodoList({todos}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem 
          todos={todo}
          key={todo.id}
          />
      ))}
    </div>
  )
}

export default TodoList;