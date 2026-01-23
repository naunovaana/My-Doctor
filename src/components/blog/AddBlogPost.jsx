export default function AddBlogPost() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-start gap-2">
        {/* Avatar */}
        <div className="w-[200px] h-[200px] shrink-0">
          <img
            src="/anonymous.jpg"
            className="w-full h-full object-cover rounded-full"
            alt="Anonymous user"
          />
        </div>

        {/* Form */}
        <div className="w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
            Постави прашање
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Кратко прашање"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows="4"
              placeholder="Опиши го проблемот подетално..."
              className="w-full border rounded-lg p-3"
            ></textarea>

            <button
              type="submit"
              className="bg-btnSecondary text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Објави прашање
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
