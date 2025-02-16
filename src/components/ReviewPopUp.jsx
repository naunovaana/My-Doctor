import StarRating from "./StarRating.jsx";
import {useState} from "react";

export default function ReviewPopUp() {
    const [rating, setRating] = useState(0);
    return (
        <div className=" rounded-2xl  w-full text-black flex flex-col items-center ">
            <div className="py-10 flex flex-col items-center text-center">
                <h1 className="text-2xl font-semibold pb-6 tracking-wide">Остави Оцена</h1>
                <p className="text-sm">Кликни на ѕвездите за да го оцениш избраниот специјалист/доктор*</p>
                {/* Star Rating Component */}
                <StarRating onRatingSelect={setRating} />
            </div>
            <form action="/" className=" w-full h-full px-4 flex flex-col">
                <div className="flex flex-col py-2">
                    <label htmlFor="name" className="ml-3 text-sm text-gray-500">Специјалист/Доктор*</label>
                        <select id="doctors" name="doctors" form="doctorform" className="bg-stone-200 rounded-3xl border-2 border-gradientfrom p-2 text-gray-800 font-semibold">
                            <option value="doctor1">Др.Сашка Иванова</option>
                            <option value="doctor2">Др.Венцо Јованов</option>
                            <option value="doctor3">Др.Драгица Василева</option>
                            <option value="doctor4">Др.Ана Наунова</option>
                        </select>
                </div>
                <div className="flex flex-col py-4">
                    <label htmlFor="message" className="ml-3 text-sm text-gray-500">Коментар*</label>
                    <textarea name="comment" form="usrform" className="rounded-3xl bg-stone-200 p-2 w-full border-2 t-2 border-gradientfrom text-gray-800 font-semibold">Услугата им беше врвна, ми се допадна целиот процес и третман на докторката Сашка!</textarea>
                </div>
                <div className=" flex justify-center p-5 ">
                    <input type="submit" value="Submit" className="bg-customButton text-white py-2 px-10 rounded-full"/>
                </div>
            </form>
            {/*<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>*/}
        </div>
    );
}