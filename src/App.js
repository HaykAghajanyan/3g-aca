import { useEffect, useState } from 'react';
// import './App.css';
import ToDoList from './contexts/ToDo/ToDoList';
import ToDoItem from './contexts/ToDo/ToDoItem';
import ToDoAdd from './contexts/ToDo/ToDoAdd';
import ToDoFooter from './contexts/ToDo/ToDoFooter';

function App() {
   const [todos, settodos] = useState([])

   useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then(res => res.json())
       .then(res => settodos(res.splice(0, 10)))
   }, [])

  return (
    <div className="App">
        <ToDoAdd onAdd={(title) => {
            settodos([
                ...todos,
                {
                    id: Math.random(),
                    title: title,
                    isCompleted: false
                }
            ])
        }}/>
        <ToDoList 
          todos={todos} 
          onDeleted={(todo) => {
              settodos(todos.filter((t) => t.id !== todo.id
              ))
          }}
          onChange={(newTodo) => {
             settodos(todos.map((todo) => {
                if(todo.id === newTodo.id){
                    return newTodo
                } else {
                    return todo
                }
             }))
          }}
          />
        <ToDoFooter todos={todos} clearCompleted={() => {
            settodos(todos.filter((todo) => !todo.isCompleted))
        }}/>
    </div>
  );
}

export default App;
