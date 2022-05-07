import {useEffect, useState } from 'react';
import './App.css';
import TodoFooter from './TodoFooter';
import TodoTitles from './TodoTitle';

function App() {
   

  const [data, setData] = useState([])
  const [todos, setTodos] = useState([])
  let arr=[]
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(results =>{
        //console.log(results)
        setData(results.data)
        arr = results.slice(0,10)
        setTodos(arr)
        console.log(arr);
      }) 
  }, [])

const handleSort = (todos) =>{
 return todos.sort((a,b)=> a.completed > b.completed ? 1 : -1)
} // sa chi ashxatum

  return (
    <div className="App">
    <TodoTitles todos={todos} onDelete={(todo)=>{
         setTodos(todos.filter((t)=> t.id !== todo.id))
       }} />
    {/* <TodoRows  changeColor = {() => {
        {todos.map((item)=>{
            if (item.completed === true) {
                 setTodos({backgroundColor:"green"}) 
    
            }
            
        })}
    }}/>  */}  
    <TodoFooter
      todos={todos}
      onClearCompleted={()=>{
          setTodos(todos.filter((item)=>!item.completed))
        }} />
    
    <button onClick={handleSort}>Sort</button>
    </div>
  );
}

export default App;
