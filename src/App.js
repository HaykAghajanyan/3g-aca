import React, { useState, useRef, useEffect } from 'react';
import Logo from "./components/Logo";
import Quote from './components/Quote'
import AddItem from './components/AddItem'
import ToDoItem from './components/ToDoItem'

import './App.css';

function App() {

  const [state, setState] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      localStorage.setItem("state", JSON.stringify(json.slice(0, 10)))
    })
     setState(JSON.parse(localStorage.getItem("state")) )
    
  }, [])


  const deleteTodoItem = (id) => {
    const newState = state.filter(item => item.id !== id)
    localStorage.setItem("state", JSON.stringify(newState))
    setState(newState)
  }

  const setToDoneTodoItem = (id) => {
    const newState = state.map(item => {
      if(item.id === id) {
        if(item.completed === false){
          item.completed = true
        } else {
          item.completed = false
        }
      }
      return item
    })
    localStorage.setItem("state", JSON.stringify(newState))
    setState(newState)
  }
  
  const enterKeyPress = ( item) => {
      addToDoItem(item)
  }

  const addToDoItem = (item) => {
    const newState = [...state]
    newState.unshift(item)
    localStorage.setItem("state", JSON.stringify(newState))
    setState(newState)
  }

  const sortItems = () => {
    const newState = [...state]
    newState.sort((a,b) => (+a.completed > +b.completed) ? 1 : ((+b.completed > +a.completed) ? -1 : 0))
    localStorage.setItem("state", JSON.stringify(newState))
    setState(newState)
  }

  return (
    <>
      <Logo />

      <div className="container">
        <Quote />
        <div className="row">
            <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">

              <AddItem 
                addItem={addToDoItem}
                enterPress={enterKeyPress}
              />
              <button 
              onClick={sortItems}
                type="button" 
                className="btn btn-block btn-outline-warning button"
              >
                Sort
              </button>
              {state ? (
                <ul className="todo-list">
                {state.map(item => {
                  return <ToDoItem key={item.id}
                          item={item}
                          deleteItem={deleteTodoItem} 
                          setToDoneItem={setToDoneTodoItem}
                        />
                  })}
                </ul>
              ) : (
                <p className="no-items text-muted text-center"><i className="fa fa-ban"></i> No items</p>
              ) }
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
