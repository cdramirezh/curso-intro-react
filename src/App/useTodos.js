import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    synchronizeItem: synchronizeTodos,
  } = useLocalStorage('TODOS_V1', []);

  // Los React Hooks son funciones de React que empiezan por 'use
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // State cannot be modified directly, it needs to use setState
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Executing this function rerenders the app
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // State cannot be modified directly, it needs to use setState
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // Executing this function rerenders the app
    saveTodos(newTodos)
  }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    synchronizeTodos,
  }

}

export { useTodos };