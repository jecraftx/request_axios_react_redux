// import React from 'react'
// import React, { useState } from "react";
// import axios from "axios";

// export default function Post() {
//   return (
//     <div>
      
//     </div>
//   )
// }

import Base from "../components/Base";
import axios from "axios";
import {Navbar} from "../components/ui";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

//   if (!post) return "No post!"
if (!post) return null;

  return (
    <Base>
    <div className="post">
      <h1> {post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
    </Base>
  );
}