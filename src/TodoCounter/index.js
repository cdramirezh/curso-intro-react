import React from "react";
import './TodoCounter.css';

// Esta es una forma de usar estilos en React. Se pueden hacer estilos inline
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

function TodoCounter({total, completed}) {
    return (
        <h2 className="TodoCounter">
            Has completado {completed} de {total} TODOs
        </h2>
    )
}

export { TodoCounter };