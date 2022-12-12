import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Main from "./pages/main.js"
import Todo from "./pages/todo.js"

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;