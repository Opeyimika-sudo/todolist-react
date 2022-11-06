import React from 'react'
import App from "../App.js"

export default function Todo(props) {
    const todoList = 
      props.todoList.map((item, id)=> (
        <div>
            <p className="todo_item" key = {id} id={id} style={props.toggleModeStyles} >
            {
              item.checked
              ? 
              <span className="material-symbols-outlined" onClick={() => props.toggleCompleted(id, item)}>
                  check_circle
              </span>
              : 
              <span className="material-symbols-outlined" onClick={() => props.toggleCompleted(id, item)}>
              circle
              </span> 
            } 
              { item.todo } 
            {
              <span className="material-symbols-outlined" onClick={()=> props.deleteTodo(id, item)}>
                close
              </span>
            }
            </p>
        </div>
      ))
    
    
  return (
    <div>
        {todoList}
        <p>It will take some time but my greatness will be undisputable</p>
    </div>
  )
}
