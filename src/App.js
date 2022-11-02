import './App.css';
import React from 'react'
import Header from "./components/Header.js"
import Todo from "./components/Todo.js"

function App() {
  const [toggleMode, setToggleMode] = React.useState(true)

  function handleClick(){
      setToggleMode(prevState => !prevState)
  }
  
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('todo')))

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
    localStorage.setItem('todo', todoList === null ? JSON.stringify([formData]) : JSON.stringify([...todoList, formData]));
  }

  React.useEffect(() => {
      setTodoList(JSON.parse(localStorage.getItem('todo')))
  }, [])

  return (
    <div className="App">
      <Header
        toggleMode={toggleMode}
        handleClick={handleClick}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Todo 
        todoList={todoList}
      />
    </div>
  );
}

export default App;
