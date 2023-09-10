import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import { Bars } from "react-loader-spinner";
import TourCard from "../shared/TourCard";
import Subscribe from "../shared/Subscribe";
import Footer from "../components/Footer/Footer";

import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../hooks/config";

const Tour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: tourData, loading, error } = useFetch(`${BASE_URL}/tours/`);

  return (
    <main className="w-full h-full pt-[90px]">
      <CommonSection title={"All Tours"} />
      <section className="w-full flex flex-col items-center justify-center gap-6">
        <SearchBar />
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
        <div className=" w-[90%] px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 place-items-center mx-auto mt-10 gap-x-14">
          {error && <h1>{error}</h1>}
          {!loading &&
            !error &&
            tourData.map((item, index) => {
              return <TourCard tour={item} key={index} />;
            })}
        </div>
        <Subscribe />
        <Footer />
      </section>
    </main>
  );
};

export default Tour;
