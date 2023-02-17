import Post from "../../Components/Post/Post";
import { Link } from "react-router-dom";
import './PostPublish.css';


export default function PostPublish(props) {
  return (
    <>
      <h2>Blog Posts</h2>
        <ul>
          {props.posts.map((post,i) => <Post post={post} key={i}/>)}
        </ul>
        <Link to="/"><button>Home</button></Link>
      </>
  );
}
