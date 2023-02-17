import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Post({post}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);
  const [newAuthor, setNewAuthor] = useState(post.author);
  const [newContent, setNewContent] = useState(post.content);

  const {title} = useParams();

  return(
    <div>
      {(!isEditing)?
          <li>
            <h3>{newTitle}</h3>
            <h4>by {newAuthor}</h4>
            <p>{newContent}</p>
            <button onClick={() =>  setIsEditing(!isEditing)}>Edit</button>
          </li> :
      <form>
        <input id="title" defaultValue={post.title} onInput = {e =>setNewTitle(e.target.value)}/>    
        <input id="author" defaultValue={post.author} onInput = {e => setNewAuthor(e.target.value)}/>
        <input id="content" defaultValue={post.content} onInput = {e => setNewContent(e.target.value)}/>
        <button onClick={() =>  setIsEditing(!isEditing)}>submit</button>
      </form>}
    </div>
      );
}