import React from 'react'

const ToDoItem = ({item, deleteItem, setToDoneItem}) => {
  const deleteTodoItem = () => {
    deleteItem(item.id)
  }

  const setToDoneTodoItem = () => {
    setToDoneItem(item.id)
  }

  return (
    <li
      className={`animated flipInX ${item.completed ? "danger" : ""}`}>
      <div className="checkbox">
        <span
          onClick={deleteTodoItem}
          className="close">
          <i className="fa fa-times"></i>
        </span>
        <label>
          <span className="checkbox-mask"></span>
          <input
            type="checkbox"
            onClick={setToDoneTodoItem}
              />
            {item.title}
        </label>
      </div>
    </li>
  )
}

export default ToDoItem
