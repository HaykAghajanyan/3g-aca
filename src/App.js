import { useCallback, useEffect, useState } from "react"
import Footer from "./Todo/Footer"
import List from "./Todo/list"

    const App =()=> {
        const [todo,setTodo] = useState([])
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res=> res.json())
            .then(arr=>{
                arr = arr.slice(0,10)
                setTodo(arr)
            })
        },[])
const onChange = (todoNew)=>{
    setTodo(todo.map(todo=>{
    if(todo.id===todoNew.id){
        return todoNew
    }
return todo
}))}
        return (
    <div>
        <List todo={todo} 
              onChange={onChange} />
        <Footer todo={todo}
                setTodo={setTodo}/>
    </div>
)
}
export default App 