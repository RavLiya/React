export default function ToDoList(props) {
    return (
        <ul>
            {props.todos.map(todo => <li key={todo.Task}>{todo.Task} {todo.Date} {todo.Priority}</li>)}
        </ul>
    );
}
