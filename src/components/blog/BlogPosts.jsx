import BlogPostCard from "./BlogPostCard";

export default function BlogPosts({ posts }) {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Најнови прашања</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
