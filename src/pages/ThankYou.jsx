import { Smile } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <section className="w-full h-screen grid place-items-center ">
        <div className="flex flex-col items-center gap-5 p-16 text-center">
          <Smile
            size={96}
            fill="lightgreen"
            stroke="black"
            strokeWidth={1}
            className="dark:stroke-lime-700"
          />
          <h1 className="text-4xl font-Borel mt-2">Thank You !!</h1>
          <h1 className="text-2xl">Your Booking Is Confirmed .....</h1>
          <Link to="/">
          <button className="px-7 py-2 text-base">
            Back To Home
          </button></Link>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
