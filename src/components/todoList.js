import React from "react";
import TodoListItem from "./todoListItem";

function TodoList({ todos, onUpdateTodo, onDeleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
