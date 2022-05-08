import { memo } from "react"

const Color  =({todo,onChange})=>{

    const todoNew = (e)=>{
        return   onChange({...todo,completed:e.target.checked})}
    
    return (
        <div>
            {
                <div>
                <input  type={'checkbox'}
                        value = {todo.id}
                        checked = {todo.completed}
                        onChange={todoNew}  />
                <span   style={{background: todo.completed && 'green'}}>{todo.title}</span>
            </div>
            }
        </div>
    )
}
export default memo(Color)