import TodoItem from "./TodoItem"
const TodoList = ({todos,onChange}) => {
    const arr=todos.slice(0,15)
  return (
    <div className="List">
        
      {
          arr.map(todo=>{
           return (
               <TodoItem
                key = {todo.id}
               todo ={todo}
               onChange ={onChange}
               />
           )
          })
      }
    </div>
  )
}
export default TodoList