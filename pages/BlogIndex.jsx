
// Shows a list of all blog posts,Each post is a clickable link using its slug


import React from "react";
import {Link} from "react-router-dom";
import { posts } from "../lib/posts";

function BlogIndex() {        
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogIndex;