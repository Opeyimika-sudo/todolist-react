import React from 'react'
import App from "../App.js"



// {todoList}
// onClick={}

export default function Todo(props) {
    console.log(props)
    const todoList = 
      props.todoList.map((item, id)=> (
        <div>
            <p className="todo_item" key = {id} id={id} style={props.toggleModeStyles} onClick={() => props.toggleCompleted(id, item)}>
            {
              item.checked
              ? 
              <span className="material-symbols-outlined" >
                  check_circle
              </span>
              : 
              <span className="material-symbols-outlined">
              circle
              </span> 
            } 
              { item.todo } 
            {
              <span class="material-symbols-outlined">
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
