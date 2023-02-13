import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { NotFoundTodo } from '../NotFoundTodo';
import { EmptyTodos } from '../EmptyTodos';
// import './App.css';

// localStorage.setItem('TODOS_V1',JSON.stringify([{text: 'Cortar cebolla', completed: true},{text: 'Tomar el curso de React', completed: false},{text: 'Llorar con la llorona', completed: true},{text: 'Sing lalala', completed: false},]))

function App() {

  const {
    error,
    loading,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    addTodo,
  } = useTodos();

  return (
    // El React.Fragment es una especie de bundle que le sirve a React para sus cálculos internos
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}

        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchValue) => <NotFoundTodo searchValue={searchValue} />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* Esta vaina de acá abajo es una render function */}
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
