import { buildQueries } from '@testing-library/react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import World from './World';
import Test from './Test';
import Todo from './Todo';



function App() {
  const [isSort,setIsSort] = useState(false)
  const [todo,setTodo] = useState([])
 useEffect(() =>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
   .then((res) =>{
     const todos = res.slice(0,10)
     console.log(todo);
   setTodo(todos)
    })
 }
  ,[])
  
 
  return (
    <div className="App">
      
      <Todo todo ={todo} onChange={(newTodo)=>{
       setTodo(todo.map((todo)=>{
          if(todo.id === newTodo.id){
            return newTodo
          }
          return todo
        }))
      }}/>
  
   </div>
    
  )
}

export default App;
