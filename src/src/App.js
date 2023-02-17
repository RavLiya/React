import Header from "./Containers/Header/Header";
import "./Containers/Header/Header.css"
import PostAdd from "./Components/PostAdd/PostAdd";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Post from "./Components/Post/Post";
import PostPublish from "./Containers/PostPublish/PostPublish";
import './App.css'
import PostPage from "./Components/Post/PostPage";

function App() { 
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('light')
  return (
      <Routes>
        {/* <Header theme={theme} setTheme={setTheme}/>
        */}
        <Route path="/" element={<PostAdd addPost={post => setPosts([...posts, post])} posts={posts} />} />
        <Route path="/post/:title" element={<PostPage posts={posts} />} />
        <Route path="/search" element={<SearchBar posts={posts}/> } />
      </Routes>
    );
}

export default App;


