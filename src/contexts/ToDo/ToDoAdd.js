import { useState } from "react"

function ToDoAdd({onAdd}) {
   
    const [text, setText] = useState("")

    const rememberText = (e) => {
        setText(e.target.value)
    }

    const addNewText = (e) => {
        e.preventDefault()
        onAdd(text)
        setText("")
    }

    return (
        <form onSubmit={addNewText}>
          <input type="text" value={text} onChange={rememberText}/>
          <button>Add</button>
        </form>
    )
}

export default ToDoAdd