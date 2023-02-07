import { useState } from "react";
import Header from "./Components/Header/Header";
import ToDoInputs from "./Components/ToDoInputs/ToDoInputs";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header/>
      <ToDoInputs addToDo = {todo => setTodos([...todos, todo])}/>
      <ToDoList todos={[todos]} />
    </div>
  );
}

export default App;
