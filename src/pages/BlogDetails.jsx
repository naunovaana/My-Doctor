import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch post
  useEffect(() => {
    const fetchPost = async () => {
      const ref = doc(db, "posts", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setPost({ id: snap.id, ...snap.data() });
      }
    };
    fetchPost();
  }, [id]);

  // Listen to comments in real-time
  useEffect(() => {
    const q = query(
      collection(db, "posts", id, "comments"),
      orderBy("createdAt", "asc"),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return alert("Мора да бидеш најавен.");
    if (!newComment.trim()) return;

    try {
      await addDoc(collection(db, "posts", id, "comments"), {
        text: newComment,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
      setNewComment("");
    } catch (err) {
      console.error(err);
      alert("Се случи грешка при додавање на коментар.");
    }
  };

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-textPrimary">{post.question}</h1>
      <p className="mt-6 text-textSecondary bg-white rounded-lg shadow-sm p-3">
        {post.description}
      </p>

      <div className="mt-12 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">
          Коментари ({comments.length})
        </h2>

        {comments.length === 0 && (
          <p className="text-gray-500">Сè уште нема коментари.</p>
        )}

        <div className="space-y-3 mb-6">
          {comments.map((c) => (
            <p
              key={c.id}
              className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-textSecondary"
            >
              {c.text}
            </p>
          ))}
        </div>

        {auth.currentUser && (
          <form onSubmit={handleCommentSubmit} className="flex flex-col gap-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Додади коментар..."
              className="w-full border rounded-lg p-3"
              rows={3}
            />
            <button
              type="submit"
              className="bg-btnSecondary text-white px-6 py-2 rounded-lg hover:bg-btnPrimaryHover transition-colors"
            >
              Коментирај
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
