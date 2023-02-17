export default function Header(props) {

    const toggleTheme = () => {
        (props.theme == "light")? props.setTheme("dark") : props.setTheme("light") 
    }

    return (
        <header className="header">
            <h1>My Blog</h1>
            <button onClick={(e) => toggleTheme()}>Change theme</button>
        </header>
    );

}






///counter: counter === counter