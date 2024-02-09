import { ImageData } from "../data";

import { holidayData } from "../data";

const Holiday = () => {
  return (
    <section
      className=" w-[93%] flex flex-col lg:flex-row items-center mx-auto lg:mx-20 my-16 py-4 px-2 bg-secondaryBG dark:bg-borderClrDark rounded-2xl capitalize"
      id="holiday-themes"
    >
      <img src={ImageData.holiday} alt="img" className="w-56 lg:w-96 lg:ml-[-90px]" />
      <div className="text-left flex flex-col gap-1">
        <h1 className="text-2xl">Explore</h1>
        <h1 className="font-bold text-5xl uppercase">Holidays</h1>
        <h1 className="text-xl">By Theme</h1>
        <h1 className="w-[268px]">Pick From Our Speical curated Packages</h1>
      </div>
      <div className="grid grid-cols-3 gap-x-4 lg:ml-14 mt-4 lg:mt-0 ">
        {holidayData.map((item) => {
          return (
            <div key={item.id} className="md:w-[180px] text-center bg-white dark:bg-secondaryBG pb-1 border-2 border-borderClr dark:border-borderClrDark">
              <img
                src={item.imgSrc}
                alt=""
                width={180}
                className="h-24 md:h-40 p-1"
              />
              <h1 className="text-xs md:text-sm py-1">{item.name}</h1>
              <hr className="bg-textDark h-[1px] w-[90%] mx-auto mb-2  shadow-textLight shadow-sm" />
              <div className="flex flex-wrap">
                {item.places.map((elem, index) => {
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
        })}
      </div>
    </section>
  );
};

export default Holiday;
