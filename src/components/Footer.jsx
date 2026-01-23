import { useState } from "react";
import RegisterForm from "./RegisterForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <footer className="w-full backdrop-blur-md bg-white/60 border-t border-cardBorder mt-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-textPrimary">
          Придружи се на нашата платформа
        </h2>
        <p className="text-textSecondary mt-2 text-sm md:text-base">
          Внеси ја твојата емаил адреса и добивај новости од нашиот тим.
        </p>

        {/* Email Input */}
        <div className="mt-8 w-full max-w-md flex items-center bg-white/80 border border-cardBorder rounded-full shadow-sm overflow-hidden backdrop-blur-sm">
          <input
            type="email"
            placeholder="Твојата емаил адреса..."
            className="flex-1 px-4 py-2 bg-transparent text-textPrimary focus:outline-none"
          />
          <button
            onClick={openModal}
            className="px-6 py-2 bg-btnPrimary text-white font-semibold rounded-full hover:bg-btnPrimaryHover transition"
          >
            Регистрирај се
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-10">
          {[faPhone, faEnvelope, faGlobe, faLocationDot].map((icon, i) => (
            <a
              href="/"
              key={i}
              className="bg-btnPrimary/60 backdrop-blur-sm p-3 rounded-full hover:bg-btnPrimaryHover transition border border-white/30 shadow-md"
            >
              <FontAwesomeIcon icon={icon} className="text-white w-6 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-textSecondary mt-8">
          © 2025 Мој Доктор™ | All rights reserved | www.mojdoktor.mk
        </p>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="relative bg-formBg rounded-xl shadow-lg p-5 w-[500px] max-w-[90%]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-stone-200 text-black rounded-full w-8 h-8"
            >
              ✕
            </button>
            <RegisterForm />
          </div>
        </div>
      )}
    </footer>
  );
}
