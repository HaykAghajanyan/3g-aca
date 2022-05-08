import { useToDoContext } from "../../contexts/toDoProvider";

const Lists = () => {
    const {lists, setLists} = useToDoContext();
    const {value, setValue} = useToDoContext();

    const getAllCompleted = () => {
        const filtered = lists.filter(list => {
            return list.completed
        });
        return filtered.length;
    }

    const changeCompleted = (id, completed) => {
        const filtered = lists.filter(list => {
            return list.id === id;
        });
        const index = lists.indexOf(filtered[0]);
        lists[index].completed = !completed;
        setLists([...lists]);
    }

    const changeValue = (e) => {
        setValue(e.target.value);
    }

    const addTodo = () => {
        if( value !== '' ) {
            lists.push({
                userId: 1, 
                id: lists.length + 1, 
                title: value, 
                completed: false
            });
            setLists([...lists]);
            setValue('');
        }
    }

    const deleteTodo = (id) => {
        const filtered = lists.filter(list => {
            return list.id !== id
        });
        setLists([...filtered]);
    }

    const toDos = () => {
        return lists.map((list) => {
            return (
                <li key={list.id} 
                    className={`${list.completed ? 'completed' : ''}`}>
                    <span>
                        <input type="checkbox" 
                               id={list.id} checked={list.completed} 
                               onChange={() => changeCompleted(list.id, list.completed)} />{list.title}
                    </span>
                    <button onClick={() => deleteTodo(list.id)}>x</button>
                </li>
            )
        });
    }

    const handleSort = () => {
        const sorted = lists.sort((a, b) => {
            return a.completed - b.completed
        });
        setLists([...sorted]);
    }
    
    return (
        <div className="container">
            <div className="todo-header">
                <input type="text" value={value} placeholder="Your todo title?" onChange={(e) => changeValue(e)} />
                <button onClick={addTodo}>Add</button>
            </div>

            <ul className="todos">  
                {toDos()}
            </ul>

            <div className="todo-footer">
                <span>{getAllCompleted()} / {lists.length} Completed</span>
                <button onClick={handleSort}>Sort</button>
            </div>
        </div>
    )
}

export default Lists;