import './App.css';
import React from 'react'
import Header from "./components/Header.js"
import Todo from "./components/Todo.js"

function App() {
  const [toggleMode, setToggleMode] = React.useState(true)

  function handleClick(){
      setToggleMode(prevState => !prevState)
  }
  
  const [formData, setFormData] = React.useState("")

  function handleChange(event){
      setFormData(event.target.value)
      console.log(event.target.value)
  }
    
  function handleSubmit(event){
        event.preventDefault();
        console.log(formData)
    }

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
