import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props) {
    const onClickButton = () => {
        // Todos los actualizadores nos permiten enviarle una función con el estado previo como argumento
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton };