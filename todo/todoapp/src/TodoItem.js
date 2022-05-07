
const TodoItem = ({todo,onChange}) => {
    return (
      <div>
        <label style={{border:'1px solid black',marginLeft: 20,marginRight:100,color:todo.completed?'green':'white' }}>
            <ul></ul>
          <input type="checkbox" checked={todo.completed}
            onChange={(e)=>{
               
              onChange({
                  ...todo,
                  completed:e.target.checked
              })
           
          } }/>
         <span className="text">{todo.title}</span>
            
            </label>
      </div>
    )
  }
  export default TodoItem