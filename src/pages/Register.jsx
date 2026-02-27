import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState(""); // <-- Inline error message
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // reset previous errors

    // Trim inputs to remove accidental spaces
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedUsername = username.trim();

    // Frontend validation
    if (!trimmedUsername) {
      setError("Внесете корисничко име.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Внесете валиден емаил.");
      return;
    }

    if (trimmedPassword.length < 6) {
      setError("Лозинката мора да има најмалку 6 карактери.");
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        trimmedEmail,
        trimmedPassword,
      );
      const user = userCredential.user;

      // Add user doc to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: trimmedUsername,
        email: trimmedEmail,
        role,
        verified: false,
        createdAt: new Date(),
      });

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setError("Овој емаил веќе е регистриран.");
      } else if (error.code === "auth/weak-password") {
        setError("Лозинката мора да има најмалку 6 карактери.");
      } else if (error.code === "auth/invalid-email") {
        setError("Внесете валиден емаил.");
      } else {
        setError("Се случи грешка при регистрација.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-bgPrimary flex flex-col">
      {/* Hero/Header */}
      <header className="relative w-full h-[40vh] bg-bgPrimary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/login:register.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary/70 to-bgPrimary/30 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-textPrimary drop-shadow-lg">
            Регистрирај Се
          </h1>
          <p className="text-textSecondary mt-4 text-lg md:text-xl max-w-xl">
            Придружи се на нашата заедница и пронајди го твојот идеален доктор.
          </p>
        </div>
      </header>

      {/* Form */}
      <main className="flex flex-1 justify-center items-center py-16">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-cardBg border border-cardBorder rounded-lg p-8 shadow-md flex flex-col space-y-4"
        >
          {error && (
            <p className="text-red-500 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <div className="w-full flex flex-col space-y-2">
            <label className="font-medium text-md">Корисничко име:</label>
            <input
              type="text"
              placeholder="Корисничко име"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
            />
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label className="font-medium text-md">Емаил:</label>
            <input
              type="email"
              placeholder="Емаил"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
            />
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label className="font-medium text-md">Лозинка:</label>
            <input
              type="password"
              placeholder="Лозинка"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-md">Регистрирај се како:</label>
            <div className="flex gap-4">
              {/* Patient Option */}
              <label
                className={`flex-1 cursor-pointer border rounded-lg p-4 transition ${
                  role === "patient"
                    ? "border-btnPrimary bg-btnPrimary/10"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value="patient"
                  checked={role === "patient"}
                  onChange={(e) => setRole(e.target.value)}
                  className="hidden"
                />
                <span className="font-medium text-textPrimary">Пациент</span>
                <p className="text-sm text-textSecondary mt-1">
                  Поставувај прашања и зачувај омилени доктори.
                </p>
              </label>

              {/* Doctor Option */}
              <label
                className={`flex-1 cursor-pointer border rounded-lg p-4 transition ${
                  role === "doctor"
                    ? "border-btnPrimary bg-btnPrimary/10"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value="doctor"
                  checked={role === "doctor"}
                  onChange={(e) => setRole(e.target.value)}
                  className="hidden"
                />
                <span className="font-medium text-textPrimary">Доктор</span>
                <p className="text-sm text-textSecondary mt-1">
                  Направи професионален профил.
                </p>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-btnPrimary text-white rounded-lg py-2 font-semibold hover:bg-btnPrimaryHover transition"
          >
            Регистрирај се
          </button>

          <p className="text-textSecondary text-center text-sm">
            Веќе имате профил?{" "}
            <Link to="/login" className="text-btnPrimary hover:underline">
              Најави се
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
