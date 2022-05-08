import './TodoRow.css'
import {useState} from "react";

const TodoRow = props => {
    const [status, setStatus] = useState(props.status);


    const changeStatus = () => {
        setStatus(()=>!status)
    }

    return (
        <div className={status?'todo-row completed':'todo-row in-progress'}>
            <h2>[TITLE] {props.title}</h2>
            <p>[ID] {props.id}</p>
            <label htmlFor='name'>[STATUS] {status ? 'Completed' : 'In Progress'}</label>
            <input type="checkbox" name='name' defaultChecked={status} onChange={()=>{
                changeStatus();
                props.onChangeHandler(props.id);
            }}/>
        </div>
    );
}

export default TodoRow;