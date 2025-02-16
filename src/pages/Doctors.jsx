import DoctorCard from "../components/DoctorCard.jsx";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            img: "/src/assets/Mask3.png",
            doctor: "Др. Драгица Василева",
            speciality: "Хирург",
            description: "Специјалист за пластична хирургија и специфични зафати кај возрасни",
            place: "Работно место: Болница 8ми септември, Карпош",
            location: "Локација: Скопје, Република Северна Македонија"
        }
    },

];

export default function Doctors() {
    return (
        <div className="text-white w-full h-full">
            <img src="/src/assets/dna banner.png" className="absolute w-full z-30 bg-blend-luminosity"/>
            <div className="z-50 flex justify-center py-36 px-20 md:py-36 text-gradientfrom via-gradientvia to-gradientto text-center">
                <h1 className="relative text-3xl md:text-5xl tracking-widest font-bold stroke-2 stroke-white">НАШИОТ ТИМ ОД СПЕЦИЈАЛИСТИ</h1>
            </div>
            <div className="py-10 space-y-16 md:space-y-20 flex flex-col">
                <div className="space-y-12 md:space-y-16">
                    {/*Title Heading*/}
                    <div className="w-full">
                        <div className="relative flex justify-center py-5 px-6 rounded-2xl w-full max-w-xs md:max-w-sm ml-28">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-gradientfrom via-gradientvia to-gradientto opacity-30 rounded-2xl"></div>
                            <div className="relative font-medium tracking-widest">
                                <h1 className="text-lg md:text-xl">ПОСЛЕДНО ДОДАДЕНИ</h1>
                            </div>
                        </div>
                    </div>
                    {/*Background Blur Layer*/}
                    <div className="blur-3xl bg-bgblur/40 absolute right-60 w-full max-w-[80%] h-[50%] rounded-full"></div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col md:flex-row justify-evenly pl-28 py-5 gap-10 md:gap-16 z-50">
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
                        <a href="/doctors">
                            <FontAwesomeIcon icon={faChevronRight} className="w-10 h-8 md:w-14 md:h-10 py-5 text-gradientfrom"/>
                        </a>
                    </div>
                </div>
                <div className="space-y-12 md:space-y-16 flex flex-col">
                    {/*Title Heading*/}
                    <div className="w-full">
                        <div className="relative flex justify-center py-5 rounded-2xl w-full max-w-xs md:max-w-sm ml-28">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-gradientfrom via-gradientvia to-gradientto opacity-30 rounded-2xl"></div>
                            <div className="relative font-medium tracking-widest">
                                <h1 className="text-lg md:text-xl">ПОПУЛАРНИ ПРЕБАРУВАЊА</h1>
                            </div>
                        </div>
                    </div>
                    {/*Background Blur Layer*/}
                    <div className="blur-3xl bg-bgblur/40 absolute right-60 w-[80%] h-[50%] rounded-full"></div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col md:flex-row justify-evenly pl-28 py-5 gap-10 md:gap-16 z-50">
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
                        <a href="/doctors">
                            <FontAwesomeIcon icon={faChevronRight} className="w-10 h-8 md:w-14 md:h-10 py-5 text-gradientfrom"/>
                        </a>
                    </div>
                </div>

                <div className="space-y-12 md:space-y-16 flex flex-col">
                    {/*Title Heading*/}
                    <div className="w-full">
                        <div className="relative flex justify-center py-5 rounded-2xl w-full max-w-xs md:max-w-sm ml-28">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-gradientfrom via-gradientvia to-gradientto opacity-30 rounded-2xl"></div>
                            <div className="relative font-medium tracking-widest">
                                <h1 className="text-lg md:text-xl">НАЈДОБРО ОЦЕНЕТИ</h1>
                            </div>
                        </div>
                    </div>
                    {/*Background Blur Layer*/}
                    <div className="blur-3xl bg-bgblur/40 absolute right-60 w-[80%] h-[50%] rounded-full"></div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col md:flex-row justify-evenly pl-28 py-5 gap-10 md:gap-16 z-50">
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
                        <a href="/doctors">
                            <FontAwesomeIcon icon={faChevronRight} className="w-10 h-8 md:w-14 md:h-10 py-5 text-gradientfrom"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}