import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full sticky top-0 bg-navbarBg border-b border-cardBorder backdrop-blur-md z-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center w-[15%]">
            <img src="/logo_new.png" className="w-[200px] h-auto" />
          </Link>

          {/* Navigation */}
          <ul className="flex flex-row items-center w-[60%] justify-center space-x-14 text-navbarText text-[15px] font-semibold uppercase">
            <li>
              <a href="/" className="hover:text-btnPrimaryHover transition">
                Дома
              </a>
            </li>
            <li>
              <a
                href="/doctors"
                className="hover:text-btnPrimaryHover transition"
              >
                Доктори
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-btnPrimaryHover transition">
                Блог
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-btnPrimaryHover transition"
              >
                За Нас
              </a>
            </li>
          </ul>
          <Link
            to="/register"
            className="ml-6 px-5 py-2 border border-btnPrimary rounded-lg text-btnPrimary font-semibold uppercase hover:bg-btnPrimary hover:text-white transition-colors"
          >
            Регистрирај профил
          </Link>

          {/* Search */}
          {/* <form
            action="/"
            className="hidden xl:flex items-center gap-0 w-[25%]"
          >
            <input
              type="text"
              name="search"
              className="flex-1 px-4 py-2 rounded-l-full bg-bgPrimary text-textPrimary placeholder:text-textSecondary border border-cardBorder focus:outline-none focus:ring-1 focus:ring-btnPrimary"
              placeholder="Пронајди доктор..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-btnPrimary hover:bg-btnPrimaryHover text-white rounded-r-full transition"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form> */}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full flex items-center px-4 py-3 bg-navbarBg md:hidden sticky top-0 z-50 border-b border-cardBorder backdrop-blur-md">
        <img src="/logo_new.png" className="w-[140px] h-auto" />
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="ml-auto"
        >
          <FontAwesomeIcon
            icon={isMobileNavOpen ? faTimes : faBars}
            className="text-2xl text-navbarText"
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-bgPrimary text-textPrimary shadow-xl z-50 animate-slideLeft p-6 flex flex-col space-y-6">
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="self-end text-2xl text-textPrimary"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="flex flex-col space-y-4 text-lg uppercase font-semibold">
            <li>
              <a href="/" className="hover:text-btnPrimary transition">
                Дома
              </a>
            </li>
            <li>
              <a href="/doctors" className="hover:text-btnPrimary transition">
                Доктори
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-btnPrimary transition">
                Блог
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("aboutus-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileNavOpen(false);
                }}
                className="hover:text-btnPrimary transition uppercase"
              >
                За Нас
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
