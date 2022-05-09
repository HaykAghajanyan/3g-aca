import {useEffect, useState} from "react";
import Add from "./inputAddСomp/inputAdd";

function App() {
    const [data, setData] = useState([])
    const [check, setCheck] = useState(Boolean)
    const[deleteElm,setDeleteElm] = useState([])
    
     

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(json => setData(json.slice(0, 5)))
    }, [])

    const sort = ()=>{
        data.sort((a, b) => a.completed > b.completed ? 1 : -1)
        setData([...data])
    }
    const recover = ()=>{
        setData([...data, ...deleteElm])
        setDeleteElm([])
        
    }
    const clear = ()=>{
        deleteElm.push( ...data.filter(item=>item.completed))
        setData(data.filter(item=>!item.completed))
        
    }

    return (
        <div className="main">
            <h1 className="title"> To Do List </h1>
            <Add data={data} setData={setData}/>
            <pre className="cont">
                {data.map((item,i) => {
                        return (
                            <div
                                key={item.id}
                                className="task"
                                style={{backgroundColor: item.completed ? "#B9E28C" : "#FF8C42"}}
                            >
                                <label className="label" style={{color: "black"}}>
                                    <input className="checkbox" type="checkbox" onClick={() => {
                                         setCheck(prev => !prev)
                                        item.completed = !item.completed
                                    }}/>
                                    {item.title} : {!item.completed ? "in Progress" : "Completed"}
                                </label>
                                <button className="x" onClick={() => {
                                   deleteElm.push( ...data.splice(i,1))
                                    console.log('deleteElm',deleteElm)
                                    setData([...data])
                                }
                                }>X</button>
                                
                            </div>
                        )
                    })
                } 
            </pre>
            <div>
                <button  className="btn" onClick={sort} >Sort Todos</button>
                <button  className="btn" onClick={clear} >Clear Completed</button>
                <button  className="btn" onClick={()=>{
                    deleteElm.push( ...data)
                    setData([])}} >Clear All</button>
                <button  className="btn"  onClick={recover} >Recover Deleted</button>

                
            </div>
        </div>
    )
}
//()=>setData(data.filter(item=>!item.completed))

export default App;
