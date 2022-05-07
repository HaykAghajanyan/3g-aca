import TodoRows from "./TodoRows";

const TodoTitles = ({todos,  onDelete}) =>{
    return(
        <div >
            {todos.map((item)=>{
                return(
                    <TodoRows key = {item.id} todo={item}  
                    onDelete={onDelete}/>
                )
            })}
        </div>
    )
}
export default TodoTitles;