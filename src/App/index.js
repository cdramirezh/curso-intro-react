import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

// localStorage.setItem('TODOS_V1',JSON.stringify([{text: 'Cortar cebolla', completed: true},{text: 'Tomar el curso de React', completed: false},{text: 'Llorar con la llorona', completed: true},{text: 'Sing lalala', completed: false},]))

function useLocalStorage(itemName, initialValue) {

  const [error, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  
  // This executes stuff just before our component is rendered
  // If we need to execute stuff just after a component renders we should useLayoutEffect
  // useEffect has two parameters. 
  //  * 1 effect: A function to execute as the effect
  //  * 2 depts: An array. Si se proporciona, useEffect se activa solo si los objetos del array cambian
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem){
          parsedItem = initialValue
          localStorage.setItem(itemName,JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorageItem);  
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setErr(error);
      }
      
    }, 2000);
  });

  const saveItem = (newTodos) => {
    try {
      const stringifiedItem = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newTodos)
    } catch (error) {
      setErr(error)
    }
    
  };

  return {item, saveItem, loading, error}

}

function App() {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

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
      loading = {loading}
      error = {error}
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
