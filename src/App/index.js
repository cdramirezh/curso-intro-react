import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de React', completed: false},
//   {text: 'Llorar con la llorona', completed: true},
//   {text: 'Sing lalala', completed: false},
// ]

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem){
    parsedItem = initialValue
    localStorage.setItem(itemName,JSON.stringify(initialValue))
  } else {
    parsedItem = JSON.parse(localStorageItem);  
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos)
    setItem(newTodos)
  };

  return [item, saveItem]

}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);

  // Los React Hooks son funciones de React que empiezan por 'use
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }) 
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text );
    // State cannot be modified directly, it needs to use setState
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Executing this function rerenders the app
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text );
    // State cannot be modified directly, it needs to use setState
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    // Executing this function rerenders the app
    saveTodos(newTodos)
  }

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />    
  );
}

export default App;
