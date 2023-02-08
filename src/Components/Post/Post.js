import { useState } from "react";

export default function Post({post}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <h3>{post.title}</h3>
      <h4>by {post.author}</h4>
      <p>{post.content}</p>
      <button onClick={() =>  setIsEditing(!isEditing)}>Edit</button>
    </li>);
}
