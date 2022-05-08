import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({ todos, onDeleted, onChange }) {
     
    return(
        <div>
            {
                todos.map((todo) => {
                    return (
                        <ToDoItem 
                        key={todo.id} 
                        todo={todo} 
                        onChange={onChange}
                        onDeleted={onDeleted}
                        />
                    )
                })
            }
        </div>
    )
}

export default ToDoList