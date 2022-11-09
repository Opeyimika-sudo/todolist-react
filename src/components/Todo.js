import React from 'react'
import '../App.css'

export default function Todo(props) {
    const TODOLIST = props.todoList.map((item, id)=> (
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
      ));


    const todoListFilters = 
      <div className="filters">
              {props.todoList.length > 0 && <p> {props.todoList.filter(item => item.checked === false).length > 1 ? `${props.todoList.filter(item => item.checked === false).length} Items Left`: `${props.todoList.filter(item => item.checked === false).length} Item Left`}</p>}
              <p className="filter-btn">All</p>
              <p className="filter-btn">Active</p>
              <p className="filter-btn">Completed</p>
              <p className="filter-btn" onClick={()=> props.clearCompleted()}>Clear Completed</p>
      </div>;
    
    return (
      <div className="todoList" style={props.toggleModeStyles}>
          {TODOLIST}
          {todoListFilters}
      </div>
    )
}