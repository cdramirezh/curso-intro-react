import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoContext } from '../TodoContext';

function AppUI(){
    return (
        // El React.Fragment es una especie de bundle que le sirve a React para sus cálculos internos
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({error, loading, searchedTodos, completeTodo, deleteTodo}) => (
                    <TodoList>
                        {error && <p>Desespérate, hubo un errro</p>}
                        {loading && <p>Estamos cargando, no desesperes</p>}
                        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                        
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
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };