import { Link } from "react-router-dom";

export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-textPrimary">
          {post.question}
        </h3>

        <p className="text-textSecondary mt-3">
          {post.description.length > 150
            ? post.description.slice(0, 150) + "..."
            : post.description}
        </p>

        <div className="mt-4 text-sm text-gray-500 flex justify-between">
          <span>Анонимен корисник</span>
          <span>{post.commentsCount || 0} коментари</span>
        </div>
      </div>

      <Link
        to={`/blog/${post.id}`}
        className="mt-4 text-primary font-medium hover:underline hover:text-blue-950"
      >
        Прочитај повеќе →
      </Link>
    </div>
  );
}
