import { Star } from "lucide-react";
import { memo } from "react";
import {ImageData} from "./../../data/imgData";

const {man,comma} = ImageData;

const StarIcon = () => {
  return <Star stroke="orange" fill="yellow" width={14} />;
};

const TestimonialsCard = ({ name, tag, quote }) => {
  return (
    <div className=" bg-white border-2 text-center flex flex-col items-center rounded-3xl relative dark:text-black">
      <div className="overlay w-full flex flex-col items-center bg-lime-200 rounded-[20px_20px_0px_20px] py-2">
        <img src={man} alt="" width={70} className=" bg-center mb-2" />
        <h1 className="font-semibold text-textDark">{name}</h1>
        <span className="text-xs">{tag}</span>
        <span className="flex gap-1">
          {Array(5)
            .fill(true)
            .map((item, index) => (
              <StarIcon key={index} />
            ))}
        </span>
      </div>
      <p className="w-56 text-xs mt-5 mb-3 px-1">"{quote}"</p>
      <img src={comma} alt="comma" className="w-7 text-gray -ml-3 mb-3" />
    </div>
  );
};

export default memo(TestimonialsCard);
