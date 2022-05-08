
function ToDoFooter({todos, clearCompleted}) {
   const completedSize =  todos.filter((todo) => todo.isCompleted).length
    return (
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default ToDoFooter