import { useEffect } from "react";
import AddBlogPost from "../components/blog/AddBlogPost";
import BlogHero from "../components/blog/BlogHero";
import BlogPosts from "../components/blog/BlogPosts";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BlogHero />
      <AddBlogPost />
      <BlogPosts />
    </div>
  );
}
