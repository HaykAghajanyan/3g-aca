import TodoRows from "./TodoRows";

const TodoTitles = ({todos, onChange, onDelete}) =>{
    return(
        <div >
            {todos.map((item)=>{
                return(
                    <TodoRows key = {item.id} todo={item} onChange={onChange}  
                    onDelete={onDelete}/>
                )
            })}
        </div>
    )
}
export default TodoTitles;