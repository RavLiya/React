import Header from "./Components/Header/Header";
import "./Components/Header/Header.css"
import PostAdd from "./Components/PostAdd/PostAdd";
import PostPublish from "./Components/PostPublish/PostPublish";
import { useState } from "react";

function App() { 
  const [posts, setPosts] = useState([]);
  return (
    <>
      <Header/>
      <PostAdd addPost={post => setPosts([...posts, post])}  />
      <PostPublish posts={posts}/>
    </>);
}

export default App;
