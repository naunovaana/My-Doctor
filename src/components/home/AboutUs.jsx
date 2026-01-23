import { useState } from "react";
import { ABOUT_US_TEXT } from "../../helperData/aboutUsText.jsx";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section
      id="aboutus-section"
      className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-row space-x-6">
        <div className="grid grid-cols-2 w-[40%] shadow-md">
          <div className="">
            <img
              src="/src/assets/about_us_photo1.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/src/assets/about_us_photo2.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/src/assets/about_us_photo2.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/src/assets/about_us_photo1.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-[60%] flex flex-col justify-center text-left space-y-4 px-4">
          <h2 className="font-bold text-3xl text-textPrimary">
            Ние Го Нудиме Најдобриот Избор на Специјалисти во Државата
          </h2>
          <p className="text-lg text-textSecondary">
            {ABOUT_US_TEXT.sectionOne}{" "}
          </p>
          <div className="flex justify-start ">
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
