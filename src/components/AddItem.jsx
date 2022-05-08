import React, { useState, useRef } from 'react'
import { generateID } from "../helper";


const AddItem = ({ enterPress, addItem }) => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const inputRef = useRef('');

  const handleAddItem = () =>{
    if(inputRef.current.value === '') {
      setErrorMessage(true)
    }else {
      const item = {
        id: generateID(),
        userId: 1,
        completed: false,
        title: inputRef.current.value
      }
      setInputValue('')
      setErrorMessage(false)
      addItem(item);
    }
  }

  const handleEnterPress = (event) => {
    if(event.keyCode === 13){
      if(inputRef.current.value === '') {
        setErrorMessage(true)
      }else {
        const item = {
          id: generateID(),
          userId: 1,
          completed: false,
          title: inputRef.current.value
        }
        setInputValue('')
        setErrorMessage(false)
        enterPress(item)
      }
    }
  }

  return (
  <>
    <div className="add-control">
      <div className="form-group has-feedback">
        <input
          type="text"
          className="form-control"
          placeholder="✍️ Add item..."
          ref={inputRef}
          onKeyDown={handleEnterPress}
          onChange={handleInputChange}
          value={inputValue}
          autoComplete="off"
          />
        <i
    onClick={handleAddItem}
    className="fa fa-plus form-control-feedback add-btn"
    title="Add item"/>
      </div>
    </div>

    {errorMessage &&
      (<p className="err text-danger text-center"><i className="fa fa-warning"/> Oops! Please, enter name item</p>)
    }

  </>
  )
}

export default AddItem;
