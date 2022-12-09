import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

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
                {error && <p>Desespérate, hubo un errro</p>}
                {loading && <p>Estamos cargando, no desesperes</p>}
                {(!loading && !searchedTodos.length && !searchValue.length) && <p>¡Crea tu primer TODO!</p>}
                {(!loading && !searchedTodos.length && searchValue.length) && <p>No hay TODOs coincidencias</p>}
                
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
                    <p>TELETRANSPORTACION</p>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };