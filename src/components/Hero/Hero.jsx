import { ImageData } from "../../data/imgData";
import SearchBar from "../../shared/SearchBar";

const { leaves, leaves2 } = ImageData;

const Hero = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center ">
      <img
        src={leaves}
        alt="leaves"
        className="w-24 md:w-52 lg:w-36 absolute left-6 top-[15%] md:top-[75%] lg:top-[70%] rotate-[20deg] opacity-80"
      />
      <div className=" lg:w-[60%] w-full text-center mt-24 md:mt-10">
        <h1 className="md:text-7xl text-3xl font-bold  md:pb-5 lg:pb-2">
          It's A Big World Out
        </h1>
        <h1 className="md:text-7xl text-3xl font-bold pt-2">
          There, Go Explore.
        </h1>
      </div>
      <h1 className="md:text-2xl text-center font-semibold my-6 md:my-10 lg:my-6">
        We always Makes our customer happy by providing many choices
      </h1>
      <SearchBar />
      <img
        src={leaves2}
        alt="leaves"
        className="w-24 md:w-52 lg:w-36 absolute right-8 top-[15%] lg:top-[20%] opacity-70 -rotate-[20deg]"
      />
    </main>
  );
};

export default Hero;
