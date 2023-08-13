import FeaturedTour from "../components/FeaturedTours/FeaturedTour";
import Hero from "../components/Hero/Hero";
import Holiday from "../components/Holiday/Holiday";
import Offers from "../components/Offers/Offers";
import Service from "../components/ServiceSection/Service";
import Testimonials from "../components/Testimonials/Testimonials";
import Subscribe from "../shared/Subscribe";
import Footer from "../components/Footer/Footer"
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
      <Hero />
      <Service />
      <FeaturedTour />
      <Holiday />
      <Testimonials />
      <Offers />
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default Home;
