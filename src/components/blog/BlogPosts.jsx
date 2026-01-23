import BlogPostCard from "./BlogPostCard";

const dummyPosts = [
  {
    id: 1,
    question: "Чести главоболки и замор",
    description:
      "Веќе неколку недели имам главоболки и чувство на замор. Дали некој имал слично искуство?",
    comments: [
      { id: 1, text: "Можно е стрес или недоволен сон." },
      { id: 2, text: "Јас имав слично, провери крвен притисок." },
    ],
  },
  {
    id: 2,
    question: "Болка во желудник после јадење",
    description:
      "После оброк чувствувам тежина и болка во желудник. Што може да биде?",
    comments: [],
  },
];

export default function BlogPosts() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8">
        Најнови прашања
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {dummyPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
