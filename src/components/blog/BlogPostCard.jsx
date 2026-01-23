export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-xl font-semibold text-textPrimary">
        {post.question}
      </h3>

      <p className="text-textSecondary mt-3">{post.description}</p>

      <div className="mt-4 text-sm text-gray-500 flex justify-between">
        <span>Анонимен корисник</span>
        <span>{post.comments.length} коментари</span>
      </div>

      <button className="mt-4 text-primary font-medium hover:underline">
        Прочитај повеќе →
      </button>
    </div>
  );
}
