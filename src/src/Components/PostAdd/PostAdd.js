import { useState } from "react";
import { Link } from "react-router-dom";
import './PostAdd.css';

export default function PostAdd(props){
    
    const [newPost, setNewPost] = useState({ title: "", author: "", content: "" });

    const handleSubmit = e => {
      e.preventDefault();
      props.addPost(newPost);
      // props.addPostContent({title: '', author: '', content: ''});
    };

    return(
        <>
        <Link to="/search"><button>Search Posts</button></Link>
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
            <div>
              <label className="title">Title:</label>
              <input type="text" id="title" value={newPost.title}
                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
              />
            </div>
            <div>
              <label className="author">Author:</label>
              <input type="text" id="author" value={newPost.author}
                onChange={e => setNewPost({ ...newPost, author: e.target.value })}
              />
            </div>
            <div>
              <label className="content">Content:</label>
              <textarea id="content" value={newPost.content}
                onChange={e => setNewPost({ ...newPost, content: e.target.value })}
              />
            </div>
            <button type="submit">Create</button>
          </form>
          <ul>
            {props.posts.map(post => (<li>
                <Link to={`/post/${post.title}`}><h3>{post.title}</h3></Link>
              </li>))}
          </ul>
          </>);

}