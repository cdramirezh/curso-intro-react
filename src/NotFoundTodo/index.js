import React from "react";

function NotFoundTodo(props) {
    return (
        <p>No hay coincidencias para "{props.searchValue}"</p>
    );
}

export { NotFoundTodo };