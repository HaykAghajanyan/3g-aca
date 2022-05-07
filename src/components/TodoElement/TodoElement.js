import {COLORS} from "../../helpers/constants"
import {useTodoContext} from "../../contexts/TodoProvider"
import "./elementStyle.css"

const TodoElement = ({todo}) => {
  const {GREEN, RED} = COLORS
  const {todoList, setTodoList, temp, setTemp} = useTodoContext()

  const deleteTodo = (todo) => {
    setTodoList(todoList.filter((item) => item.id !== todo.id))
  }

  const completeTodo = (e) => {
      setTodoList(
        todoList.map((item) => {
          if (item.id === todo.id) {
            return {
              ...todo,
              completed: e.target.checked
            }
          }
          return item
        })
      )
      setTemp(true)
    }

  return (
    <div className="TodoElement">
        <input type="checkbox" checked={todo.completed} onChange={completeTodo} />
        <span style={{color: todo.completed ? GREEN : RED}}>{todo.title}</span>
        <button onClick={() => deleteTodo(todo)} className="deleteBtn">X</button>
    </div>
  )
}

export default TodoElement