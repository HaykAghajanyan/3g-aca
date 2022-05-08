import React, {useState, useEffect} from 'react';
import img1 from '../images/pending.png';

let imageName = require('../images/pending.png');
let imageChecked = require('../images/checked.png');

function ToDo() {
    const [toDo, setToDo] = useState([]);

    useEffect(() => {
        const result = fetch('https://jsonplaceholder.typicode.com/todos');
        result.then(res => res.json())
            .then(data => {
                const arr = [];
                for (let i = 0; i < 10; i++) {
                    arr.push(data[i]);
                }
                setToDo(arr);
            })
    }, [])

    const changeCheckBox = (e) => {
        toDo[e]['completed'] = !toDo[e]['completed'];
        return setToDo([...toDo]);
    }

    const sortArr = () => {
        const sortedToDo = toDo.sort((a, b) => {
            return a['completed'] - b['completed']
        })
        return setToDo([...sortedToDo])
    }

    return (
        <div>
            <h1>TO DO LIST</h1>
            <hr/>
            {
                toDo.map((item, i) => (
                        <div
                            className={"row"}
                            key={item['id']}
                            style={item['completed'] ? {color: 'white'} : {color: '#ffaf1a'}}
                            onChange={() => {changeCheckBox(i)}}>
                            <input type="checkbox" defaultChecked={item['completed']}/>
                            {item.title}
                            {!item['completed']
                                ? <img src={img1}
                                       style={{
                                           width: "20px", height: "auto",
                                           marginLeft: "10px", top: '40px'
                                       }} alt='#'/>
                                :
                                <img src={imageChecked}
                                     style={{
                                         width: "20px", height: "auto",
                                         marginLeft: "10px", top: '40px'
                                     }} alt='#'/>}
                        </div>
                    )
                )
            }
            <button type='btn' onClick={sortArr} style={{
                height: '30px', width: '60px',
                backgroundColor: '#73B1B7', borderColor: '#73B1B7'
            }}>Sort
            </button>
        </div>
    )
}

export default ToDo;
