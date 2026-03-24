import { HOME_TEXT } from "../../helperData/homeText.jsx";
import SponsorsBanner from "../SponsorsBanner.jsx";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase pb-4 sm:pb-6 text-textPrimary">
            Вашето Здравје е Наш Приоритет!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-textSecondary px-2 lg:px-0">
            {HOME_TEXT.paragraph}
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-6">
            <Link
              to={"/doctors"}
              className="bg-btnPrimary text-white px-6 py-2 rounded-lg shadow hover:bg-btnPrimaryHover transition-colors text-center"
            >
              Пронајди специјалист
            </Link>

            <Link
              to={"/register"}
              className="bg-btnSecondary text-white px-6 py-2 rounded-lg shadow hover:bg-btnPrimaryHover transition-colors text-center"
            >
              Направи профил
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full sm:w-[80%] lg:w-full aspect-[4/3] border border-cardBorder shadow-md rounded-xl overflow-hidden">
            <img
              src="/hero.jpg"
              className="w-full h-full object-cover"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      <SponsorsBanner />
    </header>
  );
}
