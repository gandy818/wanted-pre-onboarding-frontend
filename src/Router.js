import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./pages/main.js"
import Todo from "./pages/todo.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;