import './App.css';
import React from 'react'
import Header from "./components/Header.js"
import Todo from "./components/Todo.js"

// import background images


function App() {
  // styles
  const [toggleMode, setToggleMode] = React.useState(true)

  function handleClick(){
    setToggleMode(prevState => !prevState)
  } 

  const toggleModeStyles = {
    backgroundColor: toggleMode ? "#fff" : "#25283c", 
    color: toggleMode ? "black" : "#fff"
  }
  
  const [todoList, setTodoList] = React.useState(
    () => JSON.parse(localStorage.getItem('todo')) || [])

  const [formData, setFormData] = React.useState({
    item: "",
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
    setTodoList((prevTodos) => {
      return [...todoList, formData]
    })
    
  }

  React.useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className="App">
      <Header
        toggleMode={toggleMode}
        handleClick={handleClick}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        toggleModeStyles={toggleModeStyles}
      />
      <Todo 
        todoList={todoList}
        toggleModeStyles={toggleModeStyles}
      />
    </div>
  );
}

export default App;
