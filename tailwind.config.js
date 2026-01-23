/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#F5F9FF",
        navbarBg: "#FFFFFFCC",
        navbarText: "#1B3A57",
        btnPrimary: "#2F80ED",
        btnPrimaryHover: "#1C5DB6",
        btnSecondary: "#56CCF2",
        cardBg: "#FFFFFF",
        cardBorder: "#E2E8F0",
        textPrimary: "#0F1D3A",
        textSecondary: "#4F5C6B",
        accentBlue: "#6FCF97",
        formBg: "#F0F4F8",
        hoverBg: "#E6F0FF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "footer-bg": "url('/src/assets/footer.png')",
      },
      clipPath: {
        "double-wave":
          "ellipse(180% 80% at 50% 70%), ellipse(100% 50% at 50% 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-wave": {
          "clip-path":
            "ellipse(180% 80% at 50% 70%), ellipse(100% 50% at 50% 100%)",
        },
      });
    },
  ],
};
