export default function ToDoList(props) {

    function removeonClick (i){
        props.delToDo(i);
    }
    return (
        <ul>
            {props.todos.map((todo,i) => <>
            <li key={i}>{todo.Task} {todo.Date} {todo.Priority}</li> <button id={i} onClick={e => removeonClick(e.target.id)}>Del</button>
            </>)}
        </ul>
    );
}
