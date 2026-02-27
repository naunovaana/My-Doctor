import React from "react";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Се случи грешка при одјавување.");
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* User Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-textPrimary flex items-center gap-2">
            {user.role === "patient" ? "Пациент" : "Доктор"}
            {user.role === "doctor" && user.verified && (
              <span className="text-btnPrimary font-bold">✔️ Verified</span>
            )}
          </h2>
          <div className="space-y-3">
            <p>
              <span className="font-medium">Корисничко Име:</span>{" "}
              {user.username}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleLogout}
            className="bg-btnPrimary text-white px-6 py-2 rounded-lg font-semibold hover:bg-btnPrimaryHover transition-colors"
          >
            Одјави се
          </button>
        </div>
      </div>
    </section>
  );
}
