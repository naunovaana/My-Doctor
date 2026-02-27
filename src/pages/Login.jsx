import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to profile page after successful login
      navigate("/");
    } catch (error) {
      alert(error.message);
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
        <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/70 to-bgPrimary/30 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-textPrimary drop-shadow-lg">
            Најави се
          </h1>
          <p className="text-textSecondary mt-4 text-lg md:text-xl max-w-xl">
            Добредојде назад!
            <br /> Пристапи лесно до твојот профил и зачувани доктори.
          </p>
        </div>
      </header>

      {/* Form */}
      <main className="flex flex-1 justify-center items-center py-16">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-cardBg border border-cardBorder rounded-lg p-8 shadow-md flex flex-col space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <label>Емаил:</label>
            <input
              type="email"
              placeholder="Емаил"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>Лозинка:</label>
            <input
              type="password"
              placeholder="Лозинка"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-btnPrimary text-white rounded-lg py-2 font-semibold hover:bg-btnPrimaryHover transition"
          >
            Најави се
          </button>

          <p className="text-textSecondary text-center text-sm">
            Немаш профил?{" "}
            <Link to="/register" className="text-btnPrimary hover:underline">
              Регистрирај се
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
