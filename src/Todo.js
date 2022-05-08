import TodoItem from "./TodoItem"

function Todo({todo,onChange}){
  return (
      <div>
           {
               todo.map((todo) =>{
                   console.log(todo)
                  return (
                      <TodoItem key={todo.id} todo={todo} onChange={onChange}/>
                  )
               })
           }
      </div>
  )
}


export default Todo
