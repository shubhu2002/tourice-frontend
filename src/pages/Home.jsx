import {
  Hero,
  Service,
  FeaturedTour,
  Holiday,
  Testimonials,
  Offers,
} from "../components";
import { Subscribe } from "../shared";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <FeaturedTour />
      <Holiday />
      <Testimonials />
      <Offers />
      <Subscribe />
    </>
  );
};

export default Home;
