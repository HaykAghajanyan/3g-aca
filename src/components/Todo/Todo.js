import TodoElement from "../TodoElement/TodoElement"

const Todo = ({todoList}) => {
  return (
    <div className="Todo">
      {todoList.map((item) => {
        return (
            <TodoElement 
            key ={item.id}
            todo={item}
            />
        )
      })}
    </div>
  )
}

export default Todo
