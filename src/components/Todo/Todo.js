import {useEffect, useState} from "react";
import TodoItemsSort from "./TodoItemsSort";

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [isSort, setIsSort] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data.slice(0, 10)))
    }, [])

    const handleOnChange = (e) => {
        const id = +e.target.id
        const checkedItem = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: e.target.checked
                }
            }
            return todo
        })
        setTodos(checkedItem)
    }

    if (isSort) {
        todos.sort((a, b) => {
            return a.completed - b.completed
        })
    } else {
        todos.sort((a, b) => {
            return a.id - b.id
        })
    }

    return (
        <div className="todo">
            <div>
                <TodoItemsSort setIsSort={setIsSort}/>
                {
                    todos.map((todo) => {
                        return (
                            <div key={todo.id}>
                                <input
                                    type="checkbox"
                                    onChange={handleOnChange}
                                    id={todo.id}
                                    checked={todo.completed}
                                />
                                <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Todo
