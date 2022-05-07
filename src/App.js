import {useEffect, useState } from 'react';
import './App.css';
import TodoFooter from './TodoFooter';
import TodoTitles from './TodoTitle';

function App() {
   


  const [todos, setTodos] = useState([])
  let arr=[]
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(results =>{
        
        arr = results.slice(0,10)
        setTodos(arr)
        console.log(arr);
      }) 
  }, [])

const handleSort = (todos) =>{
  const sorted=todos.sort((a,b)=> a.completed - b.completed)
  setTodos([...sorted])

} // sa chi ashxatum

  return (
    <div className="App">
    <TodoTitles todos={todos} onDelete={(todo)=>{
         setTodos(todos.filter((t)=> t.id !== todo.id))
       }}
       onChange={(newTodo)=>{
        setTodos(todos.map((todo)=>{
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }));
      }}
       />
    
    <TodoFooter
      todos={todos}
      onClearCompleted={()=>{
          setTodos(todos.filter((item)=>!item.completed))
        }} />
    
    <button onClick={()=> handleSort(todos)}>Sort</button>
    </div>
  );
}

export default App;
