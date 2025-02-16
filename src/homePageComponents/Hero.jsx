import {HOME_TEXT} from "../constants/homeText.jsx";
import SponsorsBanner from "../components/SponsorsBanner.jsx";
import ContactUsPopUp from "../components/ContactUsPopUp.jsx";
import {useState} from "react";

export default function Hero() {
    const [open,setOpen]=useState(false);

    function handleOpen(){
        setOpen(true);
    }
    function closePopUp(){
        setOpen(!open);
    }

    return (
        <div className="w-full h-full">
            <div className="blur-3xl bg-bgblur/50 absolute inset-0 -left-20 w-[30%] h-[50%] rounded-3xl z-30"></div>
            <div className="w-full h-full">
                <div className="flex flex-row w-full items-center">
                    <div className="flex flex-col w-[50%] h-full gap-y-5 z-50 ml-5 px-20">
                        <h1 className="text-left text-5xl font-bold text-white z-50 tracking-widest">
                            Добредојдовте на нашиот сајт за специјалисти
                        </h1>
                        <div className="flex p-3 justify-center">
                            <p className="text-white text-lg z-50">{HOME_TEXT.paragraph} </p>
                        </div>
                        <div className="flex flex-row space-x-10 justify-center  p-4 mt-2 mr-10">
                            <button onClick={handleOpen} type="button"
                                    className="bg-white rounded-full text-black py-2 px-3 z-50 border-2 border-homeBlue">
                                Бесплатна консултација
                            </button>
                            <button
                                onClick={() => document.getElementById("aboutus-section").scrollIntoView({behavior: "smooth"})}
                                type="button"
                                className="rounded-full text-white border-2 border-white p-2 z-50">
                                Повеќе за нашата мисија
                            </button>
                        </div>
                    </div>

                    {/*Background Blur Layer*/}
                    <div className="blur-3xl bg-bgblur/40 absolute right-20 w-[40%] h-[40%] rounded-full z-40"></div>

                    <div className="flex justify-center w-[50%] py-10 z-50 ">
                        <img src="/thegooddoctor.png" className="-mb-10 h-[500px] w-[900px]"/>
                    </div>
                </div>
            </div>
            <SponsorsBanner/>
            {/** Pop-up Overlay **/}
            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="relative bg-formbg rounded-xl shadow-lg p-5 w-[500px]">
                        <button onClick={closePopUp}
                                className="absolute top-3 right-3 bg-stone-200 text-black rounded-full w-8 h-8">
                            ✕
                        </button>
                        <ContactUsPopUp description="Опис на вашиот проблем*"
                                        text="Здраво сакам да креирам профил со цел да ги пронајдам најдобрите доктори ортопеди во околината, можете ли да ми помогнете околу тоа?"/>
                    </div>
                </div>
            )}
        </div>

    )
}