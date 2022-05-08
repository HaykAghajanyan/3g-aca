const Footer = ({todo,setTodo})=>{
  
    const  sorted = ()=>{
        const sor = todo.sort((a, b)=> a.completed - b.completed)
        console.log(sor);
        setTodo(sor)
    
    }
    return(
        <footer>
            <button onClick={sorted}>Sort</button>
        </footer>
    )
}
export default Footer