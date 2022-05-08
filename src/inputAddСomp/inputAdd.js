import {useState} from "react"

function Add({data, setData}) {
    const [value, setValue] = useState('')
    // console.log(JSON.stringify(props.data.length,null,2 ))
    // addTodos ֆունկցիան ավելացնում ա նոր Todo push անում որպես props եկաղ array-ի մեջ
    const addTodos = () => {
        const curObj = {
            "userId": 1,
            "id": data.length + 1,
            "title": value,
            "completed": false
        }
        setData([curObj, ...data])
    }
    //  change ֆունկցիան input-ի պարունակությունն ա փոխում
    const change = (evt) => {
        setValue(evt.target.value)
    }


    console.log(data)
    return (
        <>
            <div>
                <h1> {value}</h1>
                <input
                    value={value}
                    className="inputMain"
                    placeholder="Enter your plans"
                    onChange={change}
                    type="text"/>
                <button onClick={addTodos} className="addTodo"> Add Todo</button>
            </div>

        </>
    )
}

export default Add
