import { useTodoContext } from "../../contexts/TodoProvider"
import "./headerStyle.css"

const TodoHeader = () => {
    const {todoList, setTodoList} = useTodoContext()

    const inputValue = (e) => {
        if (e.key === "Enter") {
          if (e.target.value !== "") {
            const text = e.target.value
            setTodoList((prev) => {
              prev = [
                ...todoList,
                {
                  id: Math.random(),
                  title: text,
                  completed: false,
                },
              ]
              return prev
            })
            e.target.value = ""
          }
        }
      }

      const completeAll = () => {
        action: for (let i = 0; i < todoList.length; i++) {
          if (!todoList[i].completed) {
            setTodoList(
              todoList.map((item) => {
                return {
                  ...item,
                  completed: true,
                }
              })
            )
            break action
          }
        }
      }

  return (
    <div className="todoHeader">
      <button onClick={completeAll}>Complete All</button>
      <input type="text" onKeyPress={inputValue} placeholder="What needs To Be Done?" id="input" autoFocus></input>
    </div>
  )
}

export default TodoHeader
