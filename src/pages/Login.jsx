import { Link } from "react-router-dom";

export default function Login() {
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
        <form className="w-full max-w-md bg-cardBg border border-cardBorder rounded-lg p-8 shadow-md flex flex-col space-y-6">
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
