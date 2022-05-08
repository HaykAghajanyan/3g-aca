const TodoItemsSort = ({setIsSort}) => {
    const toggleSort = () => {
        setIsSort(prev => !prev)
    }

    return (
        <>
            <span onClick={toggleSort}>
                <label htmlFor="inputId">Sort</label>
                <input id="inputId" type="checkbox"/>
            </span>
        </>
    )
}
export default TodoItemsSort
