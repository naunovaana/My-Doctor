export default function BlogHero() {
  return (
    <header className="relative w-full h-[45vh] md:h-[55vh] bg-bgPrimary">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/blog6.png')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary/30 to-bgPrimary/10 backdrop-blur-sm"></div>

      {/* Text */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-textPrimary drop-shadow-lg">
          Медицински Блог & Прашања
        </h1>

        <p className="text-textSecondary mt-4 text-lg md:text-xl max-w-2xl">
          Постави прашање, сподели искуство и добиј мислење од други пациенти.
        </p>

        <p className="text-sm text-textSecondary mt-4 max-w-3xl opacity-80">
          ⚠️ Забелешка: Содржината на оваа страница не претставува професионален
          медицински совет. За точна дијагноза и третман, консултирај се со
          соодветен специјалист кој можеш да го пронајдеш на нашата платформа.
        </p>
      </div>
    </header>
  );
}
