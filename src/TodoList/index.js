import React from "react";
import "./TodoList.css"

function TodoList(props) {
    const renderFunction = props.children || props.render;

    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}

            <ul>
                {/* {props.searchedTodos.map(todo => props.render(todo))} */}
                {/* La siguiente línea es equivalente a la anterior, pasarle la función solita funciona, el map se encarga de usarla en cada elemento y mapear lo que devuelve */}
                {(!props.loading && !props.error) && props.searchedTodos.map(renderFunction)}
            </ul>
        </section>
    )
}

export { TodoList };