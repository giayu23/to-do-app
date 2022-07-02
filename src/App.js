import React , {useEffect, useState} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import './App.css';
import TodosList from "./components/TodosList";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [] //to get todos from local storage
  const [input, setInput] = useState("") //to track user inputs
  const [todos, setTodos] = useState(initialState) //to track todo list items
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
