import DoctorCard from "../components/DoctorCard.jsx";
import ContactUsPopUp from "../components/ContactUsPopUp.jsx";
import ReviewPopUp from "../components/ReviewPopUp.jsx";
import {useState} from "react";

const doctors = [
    {
        img: "/src/assets/Mask1.png",
        title: "Др. Сашка Иванова",
        description: "Специјалист за неврологија",
        doctorData: {
            img: "/src/assets/Mask1.png",
            doctor: "Др. Сашка Иванова",
            speciality: "Специјалист за неврологија",
            description: "Специјалист за неврологија, насока кон детска медицина и педијатрија",
            place: "Работно место: Болница 8ми септември, Карпош",
            location: "Локација: Скопје, Република Северна Македонија"
        }
    },
    {
        img: "/src/assets/Mask2.png",
        title: "Др. Венцо Јованов",
        description: "Психолог",
        doctorData: {
            img: "/src/assets/Mask2.png",
            doctor: "Др. Венцо Јованов",
            speciality: "Психолог",
            description: "Специјалист за психологија и манипулација со човековиот мозок",
            place: "Работно место: Болница 8ми септември, Карпош",
            location: "Локација: Скопје, Република Северна Македонија"
        }
    },
    {
        img: "/src/assets/Mask3.png",
        title: "Др. Драгица Василева",
        description: "Хирург",
        doctorData: {
            img:"/src/assets/Mask3.png",
            doctor: "Др. Драгица Василева",
            speciality: "Хирург",
            description: "Специјалист за пластична хирургија и специфични зафати кај возрасни",
            place: "Работно место: Болница 8ми септември, Карпош",
            location: "Локација: Скопје, Република Северна Македонија"
        }
    },
];

export default function DoctorsInfo() {
    const [open,setOpen]=useState(false);

    function handleOpen(){
        setOpen(true);
    }
    function closePopUp(){
        setOpen(!open);
    }

    return (
        <div className="text-white p-12">
            <div className="flex flex-col pb-16 space-x-10 z-40">
                <div className="w-full flex justify-center">
                    <h1 className="text-5xl  tracking-wide">НАШИОТ ТИМ ОД СПЕЦИЈАЛИСТИ</h1>
                </div>
                <div className="flex justify-end z-40">
                    <button className="text-sm py-2 px-32">Види повеќе ➜</button>
                </div>
            </div>

            {/*Background Blur Layer*/}
            <div className="blur-3xl bg-bgblur/50 absolute right-60 w-[70%] h-[40%] rounded-full"></div>

            <div className="flex flex-row justify-evenly px-28 py-5 gap-16">
                {doctors.map((doc, index) => (
                    <DoctorCard
                        key={index}
                        img={doc.img}
                        title={doc.title}
                        description={doc.description}
                        doctorData={doc.doctorData}
                    />
                ))}
            </div>
            <div className="px-16 z-40">
                <div
                    className=" bg-gradient-to-r from-gradientfrom via-gradientvia to-gradientto text-black p-10 rounded-b-3xl rounded-t-3xl">
                    <div className="flex flex-col items-center pb-5 font-medium tracking-widest">
                        <h1 className="text-xl">НАПРАВИ РАЗЛИКА ВО НАШИОТ<br/></h1>
                        <h2 className="text-5xl">ЗДРАВСТВЕН СИСТЕМ!</h2>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleOpen} type="button" className="bg-customButton rounded-full px-8 py-2 z-30 text-white border-2 border-customBlue">
                            ОСТАВИ ОЦЕНА
                        </button>
                    </div>
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
                        <ReviewPopUp/>
                    </div>
                </div>
            )}
        </div>
    )
}