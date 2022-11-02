import './App.css';
import React from 'react'
import Header from "./components/Header.js"
import Todo from "./components/Todo.js"

function App() {
  // const getItems = 
  const [toggleMode, setToggleMode] = React.useState(true)

  function handleClick(){
      setToggleMode(prevState => !prevState)
  }
  
  const [todoList, setTodoList] = React.useState([])
  
  const [todoChecked, setTodoChecked] = React.useState(false)

  const [todo, setTodo] = React.useState({
      item: "",
      todoChecked: todoChecked,
  })

  const [formData, setFormData] = React.useState("")
  
  function handleChange(event){
    setFormData(event.target.value)
    console.log(formData)
  }

  function handleSubmit(event){
    event.preventDefault();
    setTodo((prevState) => {
      return {
        ...todo,
        item: formData
      }
    })
    console.log(todo)
  }

  React.useEffect(() => {
    console.log("I am in love")
    localStorage.setItem('todo', todoList === null ? JSON.stringify([todo]) : JSON.stringify([...todoList, todo]));
    setTodoList(JSON.parse(localStorage.getItem('todo')))
  }, [todo])

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
        
      />
    </div>
  );
}

export default App;
