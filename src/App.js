import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([])
    const [check, setCheck] = useState(Boolean)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(json => setData(json.slice(0, 10)))
    }, [])

    return (
        <div className="main">
            <h1 className="title"> Todo List</h1>
            <pre>
                {data
                    .sort((a, b) => a.completed > b.completed ? 1 : -1)
                    .map(item => {
                        return (
                            <div
                                key={item.id}
                                className="task"
                                style={{backgroundColor: item.completed ? "#B9E28C" : "#EDAE49"}}
                            >
                                <label style={{color: item.completed ? "#1c8d21" : "#DB2B39"}}>
                                    <input type="checkbox" onClick={() => {
                                        setCheck(prev => !prev)
                                        item.completed = !item.completed
                                    }}/>
                                    {item.title} : {!item.completed ? "in Progress" : "Completed"}
                                </label>
                            </div>
                        )
                    })
                }
            </pre>
        </div>
    )
}

export default App;
