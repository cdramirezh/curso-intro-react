import React from 'react';

function TodoHeader({ children, loading }) {
    // React.Children.toArray(args) puede convertir los args en un Array, esto es útil porque React.cloneElement solo acepta un ReactElement, no es capaz de recibir varios
    const array_de_nodos = React.Children.toArray(children)

    return (
        <header>
            {array_de_nodos.map(child => React.cloneElement(child, { loading }))}
        </header>
    )
}

export { TodoHeader }