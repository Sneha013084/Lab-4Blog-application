
import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

//Uses useParams from React Router to get the slug from the URL

export default function BlogPost() {
  const { slug } = useParams();

  // find the post by using matching slug

  const post = posts.find((p) => p.slug === slug);

  //no matching post return- post not found

  if (!post) {
    return <h2> Post not found</h2>;
  }

  //return JSX

  return (
    <post>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </post>
  );
}