import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
// import './App.css';

// localStorage.setItem('TODOS_V1',JSON.stringify([{text: 'Cortar cebolla', completed: true},{text: 'Tomar el curso de React', completed: false},{text: 'Llorar con la llorona', completed: true},{text: 'Sing lalala', completed: false},]))

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
