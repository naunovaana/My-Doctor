import AddBlogPost from "../components/blog/AddBlogPost";
import BlogHero from "../components/blog/BlogHero";
import BlogPosts from "../components/blog/BlogPosts";

export default function Blog() {
  return (
    <div>
      <BlogHero />
      <AddBlogPost />
      <BlogPosts />
    </div>
  );
}
