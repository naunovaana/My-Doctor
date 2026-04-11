import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "ПОЧЕТНА", path: "/" },
    { name: "ДОКТОРИ", path: "/doctors" },
    { name: "БЛОГ", path: "/blog" },
    { name: "ЗА НАС", path: "/about" },
  ];

  return (
    <nav className="w-full border-b border-cardBorder bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-textPrimary">
          МОЈ<span className="tracking-widest font-light italic">ДОКТОР</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-sm font-medium text-navbarText gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative pb-1 transition-all
                  ${
                    isActive
                      ? "border-b border-textPrimary"
                      : "hover:border-b hover:border-textPrimary"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Profile Link */}
          {user && (
            <Link
              to="/profile"
              className={`relative pb-1 transition-all
                ${
                  location.pathname === "/profile"
                    ? "border-b border-textPrimary"
                    : "hover:border-b hover:border-textPrimary"
                }`}
            >
              МОЈ ПРОФИЛ
            </Link>
          )}

          {/* Auth Button */}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-btnPrimary text-white px-4 py-2 rounded-lg hover:bg-btnPrimaryHover transition"
            >
              ОДЈАВИ СЕ
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-btnPrimary text-white px-4 py-2 rounded-lg hover:bg-btnPrimaryHover transition"
            >
              НАЈАВИ СЕ
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t border-cardBorder">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`relative pb-1
                  ${
                    isActive
                      ? "border-b border-textPrimary"
                      : "hover:border-b hover:border-textPrimary"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {user && (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className={`relative pb-1
                ${
                  location.pathname === "/profile"
                    ? "border-b border-textPrimary"
                    : "hover:border-b hover:border-textPrimary"
                }`}
            >
              МОЈ ПРОФИЛ
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-btnPrimary text-white px-6 py-2 rounded-lg"
            >
              ОДЈАВИ СЕ
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-btnPrimary text-white px-6 py-2 rounded-lg"
            >
              НАЈАВИ СЕ
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
