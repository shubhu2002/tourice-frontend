import { memo } from "react";

const HolidayCard = ({ name, imgSrc, places }) => {
  return (
    <div className="md:w-[180px] text-center bg-white dark:bg-secondaryBG pb-1 border-2 border-borderClr dark:border-borderClrDark">
      <img src={imgSrc} alt="" width={180} className="h-24 md:h-40 p-1" />
      <h1 className="text-xs md:text-sm py-1">{name}</h1>
      <hr className="bg-textDark h-[1px] w-[90%] mx-auto mb-2  shadow-textLight shadow-sm" />
      <div className="flex flex-wrap">
        {places.map((elem, index) => {
          return (
            <a
              href="#"
              className="text-[8px] capitalize border-2 border-primaryLight mx-auto my-1 p-1"
              key={index}
            >
              {elem}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default memo(HolidayCard);
