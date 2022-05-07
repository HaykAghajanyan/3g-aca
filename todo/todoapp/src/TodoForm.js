

function TodoForm({todos,Sorted}) {
const completedSize=todos.filter((todo)=>todo.completed)
  return (
    <div className="Form">
      <button className="Button" onClick={Sorted}>Sort</button>
    </div>
  )
}

export default TodoForm
