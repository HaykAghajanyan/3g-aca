import React from "react"
import ToDoItem from "./toDoItem"

function TodoList({ todos }) {
     
    return(
        <div>
            {
                todos.map((todo) => {
                    return (
                        <ToDoItem key={todo.id}  />
                    )
                })
            }
        </div>
    )
}

export default TodoList