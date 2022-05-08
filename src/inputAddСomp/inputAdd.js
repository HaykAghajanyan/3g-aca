import { useState } from "react"

function Add(props){
    const [value,setValue] = useState('')
    const [obj,setObj] = useState()
    // console.log(JSON.stringify(props.data.length,null,2 ))
    // addTodos ֆունկցիան ավելացնում ա նոր Todo push անում որպես props եկաղ array-ի մեջ
    const addTodos = ()=>{
        setObj({
            "userId": 1,
            "id" : props.data.length + 1,
            "Title" : value,
            "completed" : false
     
        })
        props.data.unshift(obj)
        
    }
    //  change ֆունկցիան input-ի պարունակությունն ա փոխում
    const change = (evt)=>{
        setValue(evt.target.value)}

    
    console.log(props.data)
    return (
        <>
        <div>
            <h1> {value}</h1>
        <input value={value} className="inputMain" placeholder ="Enter your plans" onChange={change} type = "text" />
        <button onClick={addTodos} className="addTodo" > Add Todo </button>
        </div>
        
        </>
        
    )
}
export default Add