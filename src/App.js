import {useEffect, useState} from 'react';
import Todo from './Todo';


function App() {
    const [isSort, setIsSort] = useState(false)
    const [todo, setTodo] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((res) => {
                const todos = res.slice(0, 10)
                console.log(todo);
                setTodo(todos)
            })
    }, [])

    const sortTodos = () => {
        const completed = [], inProgress = [];
        todo.forEach(item => {
            if(item.completed) {
                completed.push(item)
            } else {
                inProgress.push(item)
            }
        })
        const arr = [...inProgress, ...completed];
        setTodo(arr)
    }


    return (
        <div className="App">
            <button onClick={sortTodos}>sort</button>
            <Todo
                todo={todo}
                onChange={(newTodo) => {
                setTodo(todo.map((todo) => {
                    if (todo.id === newTodo.id) {
                        return newTodo
                    }
                    return todo
                }))
            }}/>
        </div>
    )
}

export default App;
