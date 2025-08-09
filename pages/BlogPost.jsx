
mport React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

//Displays a blog post based on the URL slug parameter.
 // Fetches the `slug` using React Router's `useParams`.

export default function BlogPost() {
  const { slug } = useParams();


  //  Finds and renders the post from a posts list.

  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}