import HolidayCard from "./HolidayCard";
import { ImageData } from "../../data/imgData";

const { holiday, honeymoon, wild, pilgrimage } = ImageData;

const Holiday = () => {
  return (
    <section
      className=" w-[93%] flex flex-col lg:flex-row items-center mx-auto lg:mx-20 my-16 py-4 px-2 bg-secondaryBG dark:bg-borderClrDark rounded-2xl capitalize"
      id="holiday-themes"
    >
      <img src={holiday} alt="img" className="w-56 lg:w-96 lg:ml-[-90px]" />
      <div className="text-left flex flex-col gap-1">
        <h1 className="text-2xl">Explore</h1>
        <h1 className="font-bold text-5xl uppercase">Holidays</h1>
        <h1 className="text-xl">By Theme</h1>
        <h1 className="w-[268px]">Pick From Our Speical curated Packages</h1>
      </div>
      <div className="grid grid-cols-3 gap-x-4 lg:ml-14 mt-4 lg:mt-0 ">
        <HolidayCard
          name="HoneyMoon"
          imgSrc={honeymoon}
          places={["Beaches", "Hilly Vascas", "Adventures", "City Escapes"]}
        />
        <HolidayCard
          name="WildEscapes"
          imgSrc={wild}
          places={["Corbett", "Bandhavgarh", "Ranthabhore", "Kanha"]}
        />
        <HolidayCard
          name="Pilgrimage"
          imgSrc={pilgrimage}
          places={["Varanasi", "Mathura", "Viashno Devi", "Gujrat"]}
        />
      </div>
    </section>
  );
};

export default Holiday;
