import { memo } from "react";

const OfferCard = ({ imgSrc, text }) => {
  return (
    <div className="flex items-center bg-white dark:bg-[rgba(255,255,255,0.1)]  p-2 rounded-md">
      <img src={imgSrc} alt="img" width={100} className="h-24" />
      <div className="max-h-[96] flex flex-col pl-4">
        <p className="w-44 text-xs mb-2">{text}</p>
        <a className="text-sm text-bookBtn hover:text-black dark:hover:text-white font-bold mb-2 cursor-pointer">
          Book Now
        </a>
        <span className="text-[7px] text-right">*Terms & Conditions Apply</span>
      </div>
    </div>
  );
};

export default memo(OfferCard);
