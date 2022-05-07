const TodoRows = ({todo,  onDelete}) => {
    
    return(
        <div>
            <label >
                <input  type="checkbox" checked={todo.completed}   />
                <span style={{backgroundColor: "green"}} > {todo.title}</span>
                <button onClick={()=>{
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
    
    
}

export default TodoRows;
