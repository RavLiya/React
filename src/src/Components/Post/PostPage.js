import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function PostPage(props) {
  
  const {title} = useParams();  
  const [post, setPost] = useState(null);

  useEffect(() => {
        setPost(props.posts.find(post => post.title == title));
  }, [title])

  return post ? (
    <div>
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <p>{post.content}</p>
        <Link to={'/'}><button>Home</button></Link>
    </div>
    
  ) : <></>
}

export default PostPage