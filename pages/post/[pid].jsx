import React from "react";
import Axios from "axios";
import Comment from "../../components/Comment";

const Post = ({ pid, title, body, comments }) => (
  <>
    <h2>{title}</h2>
    <p> {body}</p>

    <h3>Comments</h3>
    <ul>
      {comments.map(c => (
        <Comment key={c.id} {...c}></Comment>
      ))}
    </ul>
  </>
);

Post.getInitialProps = async ({ query }) => {
  const { pid, title, body } = query;

  try {
    let res = await Axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${pid}`
    );
    const comments = res.data;
    if (!title) {
      res = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${pid}`
      );
    }
    return { ...query, comments, ...res.data };
  } catch (error) {
    console.log("unable to get comments requests for posts");
    return { ...query, comments: "unable to get data" };
  }
};

export default Post;
