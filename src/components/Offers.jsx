import { offerData } from "../data";

const Offers = () => {
  return (
    <section
      className="w-full flex flex-col items-center py-12 my-12 bg-secondaryBG gap-7 "
      id="offer"
    >
      <h1 className="text-3xl font-bold ">Get Exclusive Offers !!</h1>
      <div className="w-full flex flex-wrap justify-center gap-3 md:gap-10 px-4">
        {offerData.map((item) => {
          return (
            <div key={item.id} className="flex items-center bg-white dark:bg-[rgba(255,255,255,0.1)]  p-2 rounded-md">
              <img src={item.imgSrc} alt="img" width={100} className="h-24" />
              <div className="max-h-[96] flex flex-col pl-4">
                <p className="w-44 text-xs mb-2">{item.desc}</p>
                <a className="text-sm text-bookBtn hover:text-black dark:hover:text-white font-bold mb-2 cursor-pointer">
                  Book Now
                </a>
                <span className="text-[7px] text-right">
                  *Terms & Conditions Apply
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
