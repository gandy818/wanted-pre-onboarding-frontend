import React, { useState } from "react";
import "../styled/todoListItem.scss"


function TodoListItem({todo, onUpdateTodo, onDeleteTodo}) {
  const [value, setValue] = useState(todo.todo)
  const [readOnly, setReadOnly] = useState(true)
  const id = todo.id

  const deleteTodo = async () => {
    onDeleteTodo(id);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const updateTodo = () => {
    onUpdateTodo(id, value, todo.isCompleted);
    setReadOnly(!readOnly)
  };
  

  

  return (
    <div className="todoListItem">
      <input type="checkbox" defaultChecked={todo.isCompleted}></input>
      <input type="text" value={value} readOnly={readOnly} onChange={onChange}></input>
      <div onClick={()=>{setReadOnly(!readOnly)}}> 수정</div>
      <div onClick={deleteTodo}> 삭제</div>
      <div onClick={updateTodo}> 완료</div>
      <div> 취소</div>
    </div>
  )
}

export default TodoListItem;