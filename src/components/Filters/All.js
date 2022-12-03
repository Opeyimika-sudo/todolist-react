import React from 'react'

export default function All(props) {
  return (
    <div style={props.toggleModeStyles}>
     {props.todoList.map((item, id)=> (
        <p className="todo_item" key =
        {id}>
    {
      item.checked
      ? 
      <span className="material-symbols-outlined" id="check_circle" onClick={() => props.toggleCompleted(id, item)}>
          check_circle
      </span>
      : 
      <span className="material-symbols-outlined" id="check" onClick={() => props.toggleCompleted(id, item)}>
      circle
      </span> 
    } 
      <span id="todo_text">{ item.todo } </span>
    {
      <span className="material-symbols-outlined"  id="delete" onClick={()=> props.deleteTodo(id, item)}>
        close
      </span>
    }
      </p>
      ))}
    </div>
  )
}
