const TodoRows = ({todo,onChange, onDelete}) => {
    
    return(
        <div>
            <label >
                <input  type="checkbox" checked={todo.completed} onChange={(e)=>{
                    onChange({
                        ...todo,
                        completed: e.target.checked
                    });
                }} />
                <span style={{backgroundColor: todo.completed && "green"}} > {todo.title}</span>
                <button onClick={()=>{
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
    
    
}

export default TodoRows;
