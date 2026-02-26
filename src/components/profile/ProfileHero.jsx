import React from "react";

export default function ProfileHero() {
  return (
    <header className="relative w-full h-[45vh] md:h-[55vh] bg-bgPrimary">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/profile.jpg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary/50 to-bgPrimary/30 backdrop-blur-sm"></div>

      {/* Text */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-textPrimary drop-shadow-lg">
          Мој Профил
        </h1>
        <p className="text-textSecondary mt-4 text-lg md:text-xl max-w-xl">
          Прегледај ги твоите информации, зачуваните доктори и објавите.
        </p>
      </div>
    </header>
  );
}
