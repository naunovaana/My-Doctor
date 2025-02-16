import ContactUsPopUp from "../components/ContactUsPopUp.jsx";
import {useState} from "react";
import {ABOUT_US_TEXT} from "../constants/aboutUsText.jsx";

export default function AboutUs() {
    const[open,setOpen]=useState(false);
    function handleOpen(){
        setOpen(true);
    }
    function closePopUp(){
        setOpen(!open);
    }
    return (
        <div id="aboutus-section" className="flex flex-col px-32">
            <div className="w-full h-full flex flex-row">
                <div className="w-[50%] p-20 z-40">
                    <img src="/src/assets/about_us_photo1.png"/>
                </div>
                <div className="w-[50%] flex flex-col justify-center p-10 text-white gap-3">
                    <h1 className="text-5xl tracking-widest pb-2 z-40">НИЕ СМЕ</h1>

                    {/*Background Blur Layer*/}
                    <div className="blur-3xl bg-bgblur/40 absolute right-40 w-[50%] h-[40%] rounded-full z-30"></div>

                    <p className="text-lg pr-10 z-40">{ABOUT_US_TEXT.sectionOne} </p>
                    <div className="flex justify-start py-7 z-40">
                        <button onClick={handleOpen} type="button" className="bg-white rounded-full text-black px-6 py-2 border-2 border-homeBlue">
                            Контактирај не
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-row -mt-24">
                <div className="w-[50%] flex flex-col justify-center p-10 text-white gap-3">
                    <h1 className="text-5xl tracking-widest pb-2  text-right z-40">НАШИТЕ ВРЕДНОСТИ</h1>

                    {/*Background Blur Layer*/}
                    <div className="blur-3xl bg-bgblur/40 absolute  w-[50%] h-[40%] rounded-full z-30"></div>

                    <p className="text-lg text-right pl-10 z-40">{ABOUT_US_TEXT.sectionTwo} </p>
                    <div className="flex justify-end py-7 z-40 ">
                        <button type="button"
                                className="bg-white rounded-full text-black px-7 py-2 border-2 border-homeBlue">
                            Бесплатни совети
                        </button>
                    </div>
                </div>
                <div className="w-[50%] p-20 z-40">
                    <img src="/src/assets/about_us_photo2.png"/>
                </div>
            </div>
            {/** Pop-up Overlay **/}
            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="relative bg-formbg rounded-xl shadow-lg p-5 w-[500px]">
                        <button onClick={closePopUp}
                                className="absolute top-3 right-3 bg-stone-200 text-black rounded-full w-8 h-8">
                            ✕
                        </button>
                        <ContactUsPopUp description="Порака до нас*" text="Имам проблем со системот за регистрација!"/>
                    </div>
                </div>
            )}
        </div>
    )
}