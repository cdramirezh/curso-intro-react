import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { LoadingTodos } from '../LoadingTodos';
import { TodoError } from '../TodoError';
import { NotFoundTodo } from '../TodoNotFound';
import { TodoSkeleton } from '../TodoSkeleton';

function AppUI(){

    // Podemos agarrar los valores del estado del contexto y usarlos después
    const {
        error,
        loading,
        searchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        // El React.Fragment es una especie de bundle que le sirve a React para sus cálculos internos
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <TodoError />}
                {loading && <LoadingTodos />}
                {(!loading && !searchedTodos.length && !searchValue.length) && <TodoSkeleton />}
                {(!loading && !searchedTodos.length && searchValue.length) && <NotFoundTodo />}
                
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };