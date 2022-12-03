import React from 'react'
import '../App.css'
import All from './Filters/All'
import Active from './Filters/Active'
import Completed from './Filters/Completed'


export default function Todo(props) {
    const toggleModeFilter = {
      backgroundColor: props.toggleMode ? "#f0f0f0" : "#25283c", 
      color: props.toggleMode ? "black" : "#fff"
    }
    const todoListFilters = 
      <div className="filters">
              {props.todoList.length > 0 && <p> {props.todoList.filter(item => item.checked === false).length > 1 ? `${props.todoList.filter(item => item.checked === false).length} Items Left`: `${props.todoList.filter(item => item.checked === false).length} Item Left`}</p>}
              <p 
              style={{color: props.filters === "All" ?  "blue" : toggleModeFilter.color}}
              onClick={() => props.handleFilterClick(1)}>All</p>
              <p 
              style={{color: props.filters === "Active"? "blue" : toggleModeFilter.color}} 
              onClick={() => props.handleFilterClick(2)}>Active</p>  
              <p 
              style={{color: props.filters === "Completed" ? "blue" : toggleModeFilter.color}}
              onClick={() => props.handleFilterClick(3)}>Completed</p>
              <p onClick={()=> props.clearCompleted()}>Clear Completed</p>
      </div>;
    
    return (
      <div className="todoList" style={toggleModeFilter}>
        {/* Filters */}
          {(props.filters === "" || props.filters === "All") && <All
            todoList={props.todoList}
            toggleModeStyles={props.toggleModeStyles}
            toggleCompleted={props.toggleCompleted}
            deleteTodo={props.deleteTodo}
            clearCompleted={props.clearCompleted}
          />}
          {props.filters === "Active" && <Active 
            todoList={props.todoList}
            toggleModeStyles={props.toggleModeStyles}
            toggleCompleted={props.toggleCompleted}
            deleteTodo={props.deleteTodo}
            clearCompleted={props.clearCompleted}
            />}
          {props.filters === "Completed" && <Completed 
            todoList={props.todoList}
            toggleModeStyles={props.toggleModeStyles}
            toggleCompleted={props.toggleCompleted}
            deleteTodo={props.deleteTodo}
            clearCompleted={props.clearCompleted}
          />} 
          {todoListFilters}
      </div>
    )
}