import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {

    const onSearchValueChange = (event) => {
        // Event es una vaina useful para hacer referencia al evento
        // La propiedad target es el componente que recibió el evento
        setSearchValue(event.target.value);
    }

    // Apart of returning React.Fragments and divs, React can return Arrays!
    return (
        <input
            className="TodoSearch"
            placeholder={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}

export { TodoSearch };