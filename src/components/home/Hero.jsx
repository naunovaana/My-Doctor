import { HOME_TEXT } from "../../helperData/homeText.jsx";
import SponsorsBanner from "../SponsorsBanner.jsx";
import ContactUsPopUp from "../ContactUsPopUp.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function closePopUp() {
    setOpen(!open);
  }

  return (
    <header className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 flex flex-row justify-center space-x-4">
        <div className=" w-[50%] flex flex-col align-center justify-center">
          <div className=" flex flex-col align-center text-left pt-10 px-4">
            <h1 className="text-4xl font-bold uppercase pb-6 text-textPrimary">
              Вашето Здравје е Наш Приоритет!
            </h1>
            <p className="text-lg text-textSecondary">{HOME_TEXT.paragraph} </p>
          </div>
          <div className="flex flex-row justify-start py-10 px-4 space-x-3">
            <Link
              to={"/doctors"}
              className="bg-btnPrimary text-white px-6 py-2 rounded-lg shadow hover:bg-btnPrimaryHover transition-colors"
            >
              Пронајди доктор
            </Link>

            <button
              href="/blog"
              onClick={handleOpen}
              type="button"
              className="bg-btnSecondary text-white px-6 py-2 rounded-lg shadow hover:bg-btnPrimaryHover transition-colors"
            >
              Контактирај нѐ
            </button>
          </div>
        </div>

        <div className="flex justify-center aspect-[3/2] w-[50%] border border-cardBorder shadow-md rounded-xl overflow-hidden">
          <img src="/hero.jpg" className="w-full h-full object-center" />
        </div>
      </div>

      <SponsorsBanner />
      {/** Pop-up Overlay **/}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 backdrop-blur-sm z-50">
          <div className="relative bg-cardBg border-2 border-cardBorder rounded-xl shadow-lg p-5 w-[500px]">
            <button
              onClick={closePopUp}
              className="absolute top-3 right-3 bg-stone-200  rounded-full w-8 h-8"
            >
              ✕
            </button>
            <ContactUsPopUp
              description="Опис на вашиот проблем*"
              text="Здраво сакам да креирам профил со цел да ги пронајдам најдобрите доктори ортопеди во околината, можете ли да ми помогнете околу тоа?"
            />
          </div>
        </div>
      )}
    </header>
  );
}
