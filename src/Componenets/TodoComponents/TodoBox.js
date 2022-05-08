import TodoRow from "./TodoRow";
import './TodoBox.css'
import {useEffect, useRef, useState} from "react";
import fetchData from "../../Helpers/fetchData";
import TodoButton from "./TodoButton";

const URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoBox = () => {
    const [dataArr, setDataArr] = useState([]);
    const [sortState, setSortState] = useState(false);

    const unsortedDataArr = useRef(null);

    const changeSortState = () => {
        setSortState(() => !sortState);
    }

    const changeDataArr = arr => {
        setDataArr(() => arr)
    }

    const sortArr = arr => {
        const newArr = arr.map(el => el);
        newArr.sort((a, b) => {
            return Number(a.completed) - Number(b.completed);
        })
        return newArr;
    }

    const sortList = () => {
        const sortedArr = sortArr(dataArr);
        unsortedDataArr.current = dataArr;
        changeDataArr(sortedArr);
    }

    const unSortList = () => {
        changeDataArr(unsortedDataArr.current)
    }

    const onSortHandler = () => {
        if (sortState) unSortList();
        else sortList();
    }


    useEffect(() => {
        fetchData(URL).then(data => {
            changeDataArr(data.slice(0, 20))
        })
    }, [])

    const onChangeHandler = itemId => {
        const newArr = dataArr.map(el=>el);
        newArr.forEach(el=>{
            if(el.id === itemId){
                el.completed = !el.completed;
            }
        })
        changeDataArr(newArr);
    }

    const createRowComponenets = (arr) => {
        const result = [];
        arr.forEach(el => {
            result.push(<TodoRow key={el.id} id={el.id} status={el.completed} title={el.title}
                                 onChangeHandler={onChangeHandler}/>)
        })
        return result;
    }


    return (
        <div>
            <TodoButton sortStatus={sortState} onSortHandler={onSortHandler}
                        onChangeSortStateHandler={changeSortState}/>
            {createRowComponenets(dataArr)}
        </div>
    )
}

export default TodoBox;