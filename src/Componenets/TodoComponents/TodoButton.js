const TodoButton = props => {

    return(
        <button onClick={
            ()=>{
                props.onSortHandler();
                props.onChangeSortStateHandler();
            }
        }>{props.sortStatus?'Unsort':'Sort'}</button>
    )
}

export default TodoButton;