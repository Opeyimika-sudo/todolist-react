import React from 'react'
import App from "../App"

export default function Todo(props) {
    console.log(props)
  return (
    <div>
        {props.todoList && props.todoList.map((item)=> <p className="todo_item">{item.item}</p>)}
        <p>It will take some time but my greatness will be undisputable</p>
    </div>
  )
}
