import React, { useCallback, useState } from "react";
import "../styled/addTodo.scss"

function AddTodo({onAddTodo}) {
  const [text, setText] = useState('')
  
  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onKeyUp = () => {
    const keyCode = window.event.keyCode;

    if(keyCode === 13) {
      addTodo();
    }
  }

  const addTodo = () => {
    if(text === "") {
     alert("추가할 내용을 입력하세요") 
    }else {
      onAddTodo(text);
      setText("");
    }
  }

  return (
    <div className="addTodo">
      <div className="inputWrapper"><input type="text" value={text} onChange={onChange} onKeyUp={onKeyUp}></input></div>
      <div className="btn" onClick={addTodo}>추가하기</div>
    </div>
  )
}

export default AddTodo;