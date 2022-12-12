import React, { useCallback, useState } from "react";
import "../styled/addTodo.scss"

function AddTodo({onAddTodo}) {
  const [text, setText] = useState('')
  
  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const addTodo = useCallback(() => {
    onAddTodo(text);
    setText('')
  })

  return (
    <div className="addTodo">
      <div className="inputWrapper"><input type="text" value={text} onChange={onChange}></input></div>
      <div className="btn" onClick={addTodo}>추가하기</div>
    </div>
  )
}

export default AddTodo;