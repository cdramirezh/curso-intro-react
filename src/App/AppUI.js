import React from 'react';
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { NotFoundTodo } from '../TodoNotFound';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {

    // Podemos agarrar los valores del estado del contexto y usarlos después
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
    } = React.useContext(TodoContext);

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
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length && !searchValue.length) && <EmptyTodos />}
                {(!loading && !searchedTodos.length && searchValue.length) && <NotFoundTodo />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
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