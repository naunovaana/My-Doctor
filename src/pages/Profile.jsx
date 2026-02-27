import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import ProfileHero from "../components/profile/ProfileHero";
import ProfileInfo from "../components/profile/ProfileInfo";
import SavedDoctors from "../components/profile/SavedDoctors";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch additional data from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!userData) return <p className="text-center mt-10">User not found.</p>;

  return (
    <div>
      <ProfileHero />
      <ProfileInfo user={userData} />
      {userData.role === "patient" && <SavedDoctors />}
    </div>
  );
}
