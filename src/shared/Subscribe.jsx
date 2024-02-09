import { ImageData } from "../data";
import { memo } from "react";

const Subscribe = () => {
  return (
    <section className="w-full flex items-center flex-col-reverse md:flex-row justify-around text-black bg-lime-200 py-5 my-16">
      <div className="flex flex-col capitalize gap-3 text-center md:text-left">
        <h1 className=" w-full md:w-80 text-xl font-bold">
          subscribe now to get useful traveling information
        </h1>
        <form className="w-[350px] md:w-96 h-12 md:h-9 mx-auto flex justify-between items-center bg-white dark:bg-primaryDark px-1 md:mt-4 ">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="text-sm outline-none w-full pr-3 bg-transparent"
            required
          />
          <button className="p-2 rounded">Subscribe</button>
        </form>
        <p className="px-4 md:px-0 md:w-96 text-xs">
          Update yourself with tourice by getting latest offers and updates on
          your mark
        </p>
      </div>
      <img
        src={ImageData.subscribe}
        alt="img"
        className="w-28 md:w-52 drop-shadow-2xl mb-3 md:mb-0"
      />
    </section>
  );
};

export default memo(Subscribe);
