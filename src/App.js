import './App.css';
import React from 'react'
import Header from "./components/Header.js"
import Todo from "./components/Todo.js"

function App() {
  // styles
  const [toggleMode, setToggleMode] = React.useState(true)

  function handleClick(){
    setToggleMode(prevState => !prevState)
  } 

  const toggleModeStyles = {
    backgroundColor: toggleMode ? "#f0f0f0" : "#25283c", 
    color: toggleMode ? "black" : "#fff"
  }

  const body = document.querySelector("body");
  body.style.backgroundColor = toggleMode ? "white" : "black";

  // remove text from input after submitting
  
  const [todoList, setTodoList] = React.useState(
    () => JSON.parse(localStorage.getItem('todo')) || [])

  const [formData, setFormData] = React.useState({
    todo: "",
    checked: false
  })
  
  function handleChange(event){
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    setTodoList((prevState) => {
      return [...todoList, formData]
    })
    setFormData({
      todo: "",
      checked: false
    })
  }

  function toggleCompleted(id, item){
    const newTodos = todoList.map((todo)=> {
      if(item.todo === todo.todo){
        todo = {...todo, checked: !todo.checked}
        return {...todo}
      }
      else{
        return todo;
      }
    })
    setTodoList(newTodos);
  } 

  function deleteTodo(id, item){
    const newTodos = todoList.filter((todo) => todo !== item);
    setTodoList(newTodos);
  }

  function clearCompleted(){
    const newTodos = todoList.filter((todo) => todo.checked === false)
    setTodoList(newTodos);
  }

  React.useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className="App">
      <Header
        toggleMode={toggleMode}
        handleClick={handleClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        toggleModeStyles={toggleModeStyles}
        setFormData={setFormData}
        toggleCompleted={toggleCompleted}
      />
      <Todo 
        todoList={todoList}
        toggleModeStyles={toggleModeStyles}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
