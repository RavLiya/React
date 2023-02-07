import { useState } from "react"

export default function ToDoInputs (props) {
    const [newItem, setNewItem] = useState({Task: '', Date: '', Priority: ''});

    const onSubmit = e => {
        e.preventDefault();
        props.addToDo(newItem);
    };
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type='text'  value = {newItem.Task} onInput={e => setNewItem({...newItem, Task: e.target.value})}></input>
            <input type='date' value = {newItem.Date} onInput={e => setNewItem({...newItem, Date: e.target.value})}></input>
            <select id='priority' value = {newItem.Priority} onInput={e => setNewItem({...newItem, Priority: e.target.value})}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <input type='submit' value='Add'></input>
        </form>
        </>

    );
}