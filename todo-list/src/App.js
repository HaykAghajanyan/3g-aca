import React, {useState, useEffect, useCallback} from 'react'
import "./App.css";
import axios from 'axios'
import TodoList from './TodoList';
import TodoFoot from './TodoFoot';

function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                //console.log(res)
                setTodos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const onSort = useCallback(() => {
        setTodos(
            todos.slice(0, 15).sort((a, b) => {
                return a.completed - b.completed
            })
        )
    }, [])

    return (
        <div className="App">
            <h1 className='text'>Todo List</h1>
            <TodoList
                todos={todos}
                onChange={(newTodo) => {
                    setTodos(
                        todos.map((todo) => {
                            if (todo.id === newTodo.id) {
                                return newTodo
                            }
                            return todo
                        })
                    )
                }}
            />
            <TodoFoot onSort={onSort}/>
        </div>
    )
}

export default App;
