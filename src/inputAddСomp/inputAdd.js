import {useEffect, useState} from "react"

function Add({data, setData}) {
    const [value, setValue] = useState('')  

    const addTodos = () => {
        if(value.trim()){
        const curObj = {
            "userId": 1,
            "id": data.length + 1,
            "title": value,
            "completed": false
        }
        
        setData([curObj, ...data])  
    }
}
    const change = (evt) => {
        setValue(evt.target.value)
    }
    return (
        <>
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setValue('')
                }}>
                <input  
                    value = {value}
                    className="inputMain"
                    placeholder="Add New Todo"
                    onChange={change}
                    type="text"/>
                <button onClick={addTodos} className="addTodo">Add Todo
                </button>
                </form>
                
            </div>

        </>
    )
}

export default Add
