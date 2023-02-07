import { useState } from "react";
import Header from "./Components/Header/Header";
import ToDoInputs from "./Components/ToDoInputs/ToDoInputs";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {

  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div className="App">
      <Header/>
      <ToDoInputs addToDo = {todo => setTodos([...todos, todo])}/>
      <ToDoList todos={todos} delToDo = {index => setTodos(todos.splice(index,1))} />
    </div>
  );
}

export default App;
