import { useState } from "react";
import RegisterForm from "./RegisterForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
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
        <div className="mt-8 w-full max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center bg-white/80 border border-cardBorder rounded-full shadow-sm overflow-hidden backdrop-blur-sm">
          <input
            type="email"
            placeholder="Твојата емаил адреса..."
            className="flex-1 px-4 py-3 text-textPrimary bg-transparent focus:outline-none rounded-t-full sm:rounded-l-full sm:rounded-t-none"
          />
          <Link
            to="/register"
            className="px-6 py-3 bg-btnPrimary text-white font-semibold rounded-b-full sm:rounded-r-full sm:rounded-b-none hover:bg-btnPrimaryHover transition text-center"
          >
            Регистрирај се
          </Link>
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
    </footer>
  );
}
