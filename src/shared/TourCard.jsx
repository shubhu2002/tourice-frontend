import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const TourCard = ({tour}) => {
  const {_id,title,price,desc,rating,photo} = tour;
  return (
    <div className="w-44 md:w-56 bg-secondaryBG border-2 border-borderClr dark:border-borderClrDark rounded-lg text-xs pb-2">
      <img
        src={photo}
        alt="place"
        className=" w-44 h-40 md:w-56 md:h-40 pb-2 rounded-lg"
      />
      <h1 className="text-xs md:text-base px-2 font-bold">{title}</h1>
      <h1 className="w-44 md:w-56 px-2 md:block text-[9px] md:text-xs">
        {desc}
      </h1>
      <h1 className="flex items-center gap-1 px-2 py-2 font-sans ">
        {price}/-<span className="">per person</span>
        <Star
          size={16}
          strokeWidth={0.5}
          fill="Yellow"
          stroke="orangered"
          className=" md:ml-10"
        />
        {rating}
      </h1>
      <Link to={`/tour/${_id}`} className="px-2 font-bold text-bookBtn hover:text-black dark:hover:text-white tracking-widest ">
          Book Now
      </Link>
    </div>
  );
};
export default TourCard;
