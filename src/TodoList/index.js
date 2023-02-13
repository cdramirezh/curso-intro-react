import React from "react";
import "./TodoList.css"

function TodoList(props) {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length && !props.totalTodos) && props.onEmptyTodos()}

            {/* {props.searchedTodos.map(todo => props.render(todo))} */}
            {/* La siguiente línea es equivalente a la anterior, pasarle la función solita funciona, el map se encarga de usarla en cada elemento y mapear lo que devuelve */}
            {props.searchedTodos.map(props.render)}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };