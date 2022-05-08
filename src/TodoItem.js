function TodoItem({todo, onChange}) {

    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={(e) => {
                onChange({
                    ...todo,
                    completed: e.target.checked
                })
            }}/>
            <span style={{color: todo.completed && "green"}}>{todo.title}</span>
        </div>
    )
}

export default TodoItem;
