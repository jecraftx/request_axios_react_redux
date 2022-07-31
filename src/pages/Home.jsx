// import React from 'react'
// import React, { useState } from "react";
// import axios from "axios";

// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }
import Base from "../components/Base";
import axios from "axios";
import {Navbar} from "../components/ui";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <Base>
    <div className="get">
      <h1>title: {post.title}</h1>
      <p><b>description: </b>{post.body}</p>
    </div>
    </Base>
  );
}
