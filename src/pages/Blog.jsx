import { useEffect, useState } from "react";
import AddBlogPost from "../components/blog/AddBlogPost";
import BlogHero from "../components/blog/BlogHero";
import BlogPosts from "../components/blog/BlogPosts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const snapshot = await getDocs(collection(db, "posts"));

    const postsData = await Promise.all(
      snapshot.docs.map(async (docSnap) => {
        const postId = docSnap.id;
        const postData = docSnap.data();

        // Count comments for this post
        const commentsSnapshot = await getDocs(
          collection(db, "posts", postId, "comments"),
        );
        const commentsCount = commentsSnapshot.size;

        return {
          id: postId,
          ...postData,
          commentsCount,
        };
      }),
    );

    setPosts(postsData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPosts();
  }, []);

  return (
    <div>
      <BlogHero />
      <AddBlogPost refreshPosts={fetchPosts} />
      <BlogPosts posts={posts} />
    </div>
  );
}
