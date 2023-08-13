import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import Subscribe from "../shared/Subscribe";
import Footer from "../components/Footer/Footer";
import CommonSection from "../shared/CommonSection";

const SearchResult = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
      <main className="w-full h-full pt-[90px]">
        <CommonSection title="Search Results" />
        <div className="w-full px-12 flex ">
          {data.length===0 ?<h1 className="w-full text-2xl text-center py-12">No Tour Found</h1> : data.map((tour,index) => {
            return <TourCard tour={tour} key={index}/>;
          })}
        </div>
        <Subscribe />
        <Footer />
      </main>
    </>
  );
};

export default SearchResult;
