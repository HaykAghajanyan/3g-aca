
function ToDoItem({todo, onChange, onDeleted}) {

   const onChecked = (e) => {
     // e.target.checked
     onChange({
        ...todo,
        isCompleted: e.target.checked
     })
   }

    return (
              <div>
                 <label>
                    <input type="checkbox" checked={todo.isCompleted} onChange={onChecked}/>
                     {todo.text}
                    <button onClick={() => {
                       onDeleted(todo)
                    }}>X</button>
                 </label>
              </div>
           )
}
   
export default ToDoItem 