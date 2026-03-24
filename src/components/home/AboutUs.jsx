import { ABOUT_US_TEXT } from "../../helperData/aboutUsText.jsx";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section
      id="aboutus-section"
      className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col lg:flex-row lg:space-x-6 gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full sm:w-[80%] lg:w-full aspect-[4/3] border border-cardBorder shadow-md rounded-xl overflow-hidden">
            <img
              src="/aboutus_medical2.jpg"
              className="w-full h-full object-cover"
              alt="About Us"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-4 px-2 lg:px-4">
          <h2 className="font-bold text-3xl sm:text-4xl text-textPrimary">
            Ние Го Нудиме Најдобриот Избор на Специјалисти во Државата
          </h2>
          <p className="text-base sm:text-lg text-textSecondary">
            {ABOUT_US_TEXT.sectionOne}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to={"/about"}
              className="bg-btnPrimary text-white px-6 py-2 rounded-lg shadow hover:bg-btnPrimaryHover transition-colors"
            >
              Повеќе за нашата мисија
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
