import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IndianRupee, Star } from "lucide-react";
import Booking from "../components/Booking/Booking";
import Footer from "../components/Footer/Footer";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../hooks/config";

const TourDetail = () => {
  const { id } = useParams();
  const { data: tourData } = useFetch(`${BASE_URL}/tours/${id}`);
  const { title, price, desc, rating, photo, topPlaces } = tourData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
console.log(topPlaces)
  return (
    <>
      <main className="w-full flex flex-col lg:flex-row pt-24 gap-10 lg:gap-20 px-5 lg:px-28 pb-10 font-Poppins ">
        <section className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-7 ">
          <img src={photo} alt="photo" className="w-full rounded-lg" />
          <div className="w-full flex flex-col border-[1px] border-[rgba(109,107,107,0.49)] rounded-lg p-4 gap-2">
            <span className="text-xl">{title}</span>
            <div className="flex gap-5">
              <span className="flex gap-2 items-center text-sm">
                <Star size={18} fill="yellow" stroke="orange" /> {rating}
              </span>
              <span className="flex gap-1 text-sm items-center">
                <IndianRupee size={18} />
                {price} /- per person
              </span>
            </div>
            <h1 className="text-lg mt-4">Description</h1>
            <p className="text-sm">{desc}</p>
            <h1 className="text-lg mt-4">Top Places</h1>
            {Array.isArray(topPlaces) && topPlaces.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {topPlaces.map((place, index) => (
                  <li key={index} className="text-sm">{place} ||</li>
                ))}
              </ul>
            ) : (
              <p>No top places available for this tour.</p>
            )}
          </div>
        </section>
        <section className="w-full lg:w-2/6 flex flex-col items-center gap-5 ">
          <Booking tour={tourData} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TourDetail;
