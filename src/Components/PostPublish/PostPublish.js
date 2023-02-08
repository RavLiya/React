import Post from "../Post/Post";

export default function PostPublish(props) {
  return (
    <>
      <h2>Blog Posts</h2>
        <ul>
          {props.posts.map((post,i) => <Post post={post} key={i}/>)}
        </ul>
      </>
  );
}
