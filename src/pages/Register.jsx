import { Link } from "react-router-dom";

export default function Register() {
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
            Придружи се на нашата заедница и пронајди го твојот идеален доктор.“
          </p>
        </div>
      </header>

      {/* Form */}
      <main className="flex flex-1 justify-center items-center py-16">
        <form className="w-full max-w-md bg-cardBg border border-cardBorder rounded-lg p-8 shadow-md flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Корисничко име"
            className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
          />
          <input
            type="email"
            placeholder="Емаил"
            className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
          />
          <input
            type="password"
            placeholder="Лозинка"
            className="px-4 py-2 border border-cardBorder rounded focus:outline-none focus:ring-1 focus:ring-btnPrimary"
          />
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
