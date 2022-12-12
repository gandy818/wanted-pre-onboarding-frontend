import React, { useState } from "react";
import "../styled/todoListItem.scss";

function TodoListItem({ todo, onUpdateTodo, onDeleteTodo }) {
  const [value, setValue] = useState(todo.todo);
  const [completed, setCompleted] = useState(todo.isCompleted)
  const [readOnly, setReadOnly] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [showDefaultBtn, setShowDefaultBtn] = useState(true);
  const [showUpdateBtn, setShowUpdateBtn] = useState(false);

  const id = todo.id;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const checkboxStatus = (e) => {
    setCompleted(e.target.checked)
  };

  const onUpdateMode = () => {
    setReadOnly(!readOnly);
    setDisabled(!disabled);

    setShowDefaultBtn(false);
    setShowUpdateBtn(true);
  };

  const deleteTodo = async () => {
    onDeleteTodo(id);
  };

  const updateTodo = () => {
    onUpdateTodo(id, value, completed);
    setReadOnly(!readOnly);
    setDisabled(!disabled);
    setShowDefaultBtn(true);
    setShowUpdateBtn(false);
  };

  const cancleTodo = () => {
    //바꾸기 전의 토글값과 내용값 가져와야함
    setShowDefaultBtn(true);
    setShowUpdateBtn(false);
  }


  return (
    <div className="todoListItem">
      <input type="checkbox" id={"checkbox" + todo.id} defaultChecked={completed} disabled={disabled} onChange={checkboxStatus}></input>
      <label htmlFor={"checkbox" + todo.id}></label>
      <input type="text" value={value} readOnly={readOnly} onChange={onChange}></input>
      <div className={"btn" + (showDefaultBtn ? " isShow" : " isHide")} onClick={onUpdateMode}>수정</div>
      <div className={"btn" + (showDefaultBtn ? " isShow" : " isHide")} onClick={deleteTodo}>삭제</div>
      <div className={"btn" + (showUpdateBtn ? " isShow" : " isHide")} onClick={updateTodo}>완료</div>
      <div className={"btn" + (showUpdateBtn ? " isShow" : " isHide")} onClick={cancleTodo}>취소</div>
    </div>
  );
}

export default TodoListItem;
