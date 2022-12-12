import React from "react";
import TodoListItem from "./todoListItem";

function TodoList({todos, onGetTodo, onUpdateTodo, onDeleteTodo}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem 
          todo={todo}
          onGetTodo={onGetTodo}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
          key={todo.id}
          />
      ))}
    </div>
  )
}

export default TodoList;