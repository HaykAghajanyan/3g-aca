import React, { useState } from 'react';
//import Lists from './results';
import './App.css';

const App = () => {

    const [list, setList] = useState([]);

    const handleChange=(elem)=>{

        const {name} = elem.target;
        console.log('todooooooooooo ', name);

        let ind = list.findIndex( elem => {
            //console.log('element  ', elem.id)
            return elem.id === Number(name);
            });
       
        let todo = list[ind];
        console.log('ooooooooo  ', todo)
        todo.completed = !todo.completed;
        setList((prev)=>{
                const newList=[...prev, todo]
                return newList
                })
    } 

    const but = () => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                setList(data)

            })
            .catch((error) => {
                console.log('eeee', error)
            })
    }

    return (
        <>
            <button onClick={but}> Click</button>
            <div>
                {list.map(e => {
                    return (
                        <React.Fragment key={e.id}>
                            <hr style={{
                                width: '50%',
                            }}/>
                            <div className={`list-item ${e.completed ? 'colored' : ''}`}>
                                <p>ID: {e.id}</p>
                                <span>title: {e.title}</span>
                                <span>
                                    <input
                                        name={e.id}
                                        type='checkbox'
                                        checked={e.completed}
                                        onChange={handleChange}/>
                                </span>
                                <p> user ID: {e.userId} </p>
                                <p> Status: {e.completed ? 'true' : 'false'} </p>
                            </div>
                        </React.Fragment>
                    )
                })
                }
            </div>
        </>
    )
}


export default App
