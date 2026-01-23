export default function AboutHero() {
  return (
    <header className="w-full bg-bgPrimary relative">
      <div className="absolute inset-0">
        <img
          src="/src/assets/aboutus3.jpg"
          alt="About us"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-textPrimary">
          За Нас
        </h1>
        <p className="mt-4 text-textSecondary max-w-2xl mx-auto">
          Мој Доктор е платформа создадена со цел да го олесни патот до
          вистинскиот специјалист и точната здравствена информација.
        </p>
      </div>
    </header>
  );
}
