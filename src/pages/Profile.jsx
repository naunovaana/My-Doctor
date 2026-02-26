import ProfileHero from "../components/profile/ProfileHero";
import ProfileInfo from "../components/profile/ProfileInfo";
import SavedDoctors from "../components/profile/SavedDoctors";
import React, { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Sample user data — in the real app, fetch from backend/auth
  const user = {
    username: "ana_n",
    email: "ana@example.com",
  };

  return (
    <div>
      <ProfileHero />
      <ProfileInfo user={user} />
      <SavedDoctors />
    </div>
  );
}
