import { useState } from "react";

export default function ToDoList(props) {

    const [newItem, setNewItem] = useState([]);

    const onClickdel = e => {
        setNewItem(props.todos.splice(e.target.id, 1));
        props.delTodo(newItem);
    }

    
    return (
        <ul>
            {props.todos.map((todo,i) => <>
            <li key={i}>{todo.Task} {todo.Date} {todo.Priority}</li> 
            <button id={i} onClick={onClickdel}>Del</button>
            </>)}
        </ul>
    );
}
