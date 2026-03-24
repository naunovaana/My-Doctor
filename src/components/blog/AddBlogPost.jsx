import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AddBlogPost({ refreshPosts }) {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Мора да бидеш најавен.");
      return;
    }

    if (!question.trim() || !description.trim()) {
      alert("Пополнете ги полињата.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        question,
        description,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });

      await refreshPosts();

      setQuestion("");
      setDescription("");
      alert("Прашањето е објавено!");
    } catch (err) {
      console.error(err);
      alert("Грешка при објава.");
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-center justify-start gap-2">
        <div className="w-[200px] h-[200px] shrink-0">
          <img src="/anonymous.jpg" className="rounded-full" />
        </div>

        <div className="w-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Постави прашање
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Кратко прашање"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Опиши го проблемот..."
              className="w-full border rounded-lg p-3"
            />

            <button className="bg-btnSecondary text-white px-6 py-3 rounded-lg hover:bg-btnPrimaryHover transition-colors">
              Објави прашање
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
