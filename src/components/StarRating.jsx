import {FaStar} from "react-icons/fa";
import {useState} from "react";

export default function StarRating({onRatingSelect}){
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);

    function handleClick(selectedRating){
        setRating(selectedRating);
        onRatingSelect(selectedRating); // Pass selected rating to the parent form
    }

    return(
        <div className="flex space-x-2 pt-4">
            {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
                key={star}
                className={`cursor-pointer text-3xl transition ${
                (hover || rating) >= star ? "text-yellow-500" : "text-white stroke-2 stroke-black"
            }`}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => handleClick(star)}
            />
            ))}
        </div>
    );
}