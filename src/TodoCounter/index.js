import React from "react";
import './TodoCounter.css';

// Esta es una forma de usar estilos en React. Se pueden hacer estilos inline
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <h2 className={`TodoCounter${!!loading && "--loading"}`}>
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
    )
}

export { TodoCounter };