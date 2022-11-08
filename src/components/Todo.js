import React from 'react'
import App from "../App.js"

export default function Todo(props) {
      // const completed = document.
      // if I click a button, I want to get a variation of todoList so what if I do an if-else statement where todoList means different things;
    const presentActive = props.todoList.filter(todo => todo.checked === true).map((item, id)=> (
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
        ));

    const presentCompleted = props.todoList.filter(todo => todo.checked === true).map((item, id)=> (
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
        ));

    const presentAll = props.todoList.map((item, id)=> (
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
        ));

    let TODOLIST = presentAll;

    function Active(){
      TODOLIST = presentActive;
      console.log("amazing")
    }

    function Completed(){
      TODOLIST = presentCompleted;
      console.log("sing");
    }

    function All(){
      TODOLIST = presentAll;
      console.log("yellow!")
    }

    const todoListFilters = 
      <div className="filters">
              {props.todoList.length > 0 && <p> {props.todoList.length > 1 ? `${props.todoList.length} Items Left`: `${props.todoList.length} Item Left`}</p>}
              <p onClick={() => All()}>All</p>
              <p onClick={() => Active()}>Active</p>
              <p onClick={() => Completed()}>Completed</p>
              <p onClick={() => props.clearCompleted()}>Clear Completed</p>
      </div>;
    
    return (
      <div>
          {TODOLIST}
          {console.log(TODOLIST)}
          {todoListFilters}
          <p>It will take some time but my greatness will be undisputable</p>
      </div>
    )
}