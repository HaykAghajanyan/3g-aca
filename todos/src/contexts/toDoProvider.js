import {createContext, useContext, useState, useEffect} from "react";

export const ToDoContext = createContext(null);

const ToDoProvider = ({children}) => {
    const [lists, setLists] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setLists([...json.splice(0, 10)]))
            .catch(error => console.log(error))
    }, []);

    return <ToDoContext.Provider value={{lists, setLists, value, setValue}}>
        {children}
    </ToDoContext.Provider>
}

export const useToDoContext = () => useContext(ToDoContext)

export default ToDoProvider