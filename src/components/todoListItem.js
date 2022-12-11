import React, { useState } from "react";
import "../styled/todoListItem.scss";

function TodoListItem({ todo, onUpdateTodo, onDeleteTodo }) {
  const [value, setValue] = useState(todo.todo);
  const [completed, setCompleted] = useState(todo.isCompleted)
  const [readOnly, setReadOnly] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const id = todo.id;

  const deleteTodo = async () => {
    onDeleteTodo(id);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const updateTodo = () => {
    onUpdateTodo(id, value, completed);
    setReadOnly(!readOnly);
    setDisabled(!disabled);
  };

  const checkboxStatus = (e) => {
    setCompleted(e.target.checked)
  };

  const onUpdateMode = () => {
    setReadOnly(!readOnly);
    setDisabled(!disabled);
  };

  return (
    <div className="todoListItem">
      <input
        type="checkbox"
        defaultChecked={completed}
        disabled={disabled}
        onChange={checkboxStatus}
      ></input>
      <input
        type="text"
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      ></input>
      <div onClick={onUpdateMode}> 
      수정</div>
      <div onClick={deleteTodo}> 삭제</div>
      <div onClick={updateTodo}> 완료</div>
      <div> 취소</div>
    </div>
  );
}

export default TodoListItem;
