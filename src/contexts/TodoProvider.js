import {createContext, useContext, useState, useEffect} from "react";

export const todoContext = createContext(1)

const TodoProvider = ({children}) => {

const [todoList, setTodoList] = useState([])
const [temp, setTemp] = useState(null)

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const arr = data.slice(0, 10)
        setTodoList((prev) => {
          prev = [...arr]
          return prev
        })
        return arr
      })
      .then((data) => {
        for(let i = 0; i < data.length; i++){
          if(data[i].completed){
            setTemp(true)
            break
          }
        }
      })
      .catch((e) => console.log("oops"))
  }, [])


    return <todoContext.Provider value={{todoList, setTodoList, temp, setTemp}}>
        {children}
    </todoContext.Provider>
}

export const useTodoContext = () => useContext(todoContext)

export default TodoProvider
