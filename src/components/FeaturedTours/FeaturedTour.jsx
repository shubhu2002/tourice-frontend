import TourCard from "../../shared/TourCard";
import { Bars } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../hooks/config";

const FeaturedTour = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours/`);

  return (
    <section className="w-full mb-12">
      <h1 className="w-full text-3xl font-Borel text-center md:text-3xl my-6">
        Popular Destinations
      </h1>
      {loading && (
        <div className="w-full flex justify-center">
          <Bars
            height="56"
            width="56"
            color="rgb(251,146,60)"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
      )}
      {error && (
        <h1 className="text-xl capitalize font-mono text-center">{error}</h1>
      )}
      <div className=" w-[90%] px-5 grid grid-cols-2 lg:grid-cols-4  gap-y-10 place-items-center mx-auto  gap-x-14">
        {!loading &&
          !error &&
          featuredTours
            .filter((item) => item.featured)
            .map((item, index) => {
              return <TourCard tour={item} key={index} />;
            })}
      </div>
    </section>
  );
};

export default FeaturedTour;
