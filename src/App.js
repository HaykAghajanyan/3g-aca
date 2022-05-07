import Todo from "./components/Todo/Todo"
import TodoFooter from "./components/TodoFooter/TodoFooter"
import TodoHeader from "./components/TodoHeader/TodoHeader"
import {useTodoContext} from "./contexts/TodoProvider"
import "./App.css"

function App() {
  const {todoList, setTodoList} = useTodoContext()

  return (
    <div>
      <h1 id="title">Todos</h1>
      <div className="App">
        <div className="AppChild">
          <TodoHeader />
          <Todo todoList={todoList} />
          <TodoFooter />
        </div>
      </div>
    </div>
  )
}

export default App
