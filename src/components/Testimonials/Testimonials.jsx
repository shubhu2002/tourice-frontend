import TestimonialsCard from "./TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ImageData } from "./../../data/imgData";

const { airplane } = ImageData;

const Testimonials = () => {
  return (
    <section className="w-full  flex flex-col items-center relative pt-8 my-12 dark:bg-secondaryBG ">
      <img
        src={airplane}
        alt="tree"
        className="w-28 lg:w-72 absolute left-0 lg:-left-7 top-36 lg:top-0 opacity-80 -rotate-[30deg]"
      />
      <h1 className="w-full text-center text-3xl font-Borel  tracking-widest">
        Our Happy Customers !!
      </h1>
      <h1 className="text-sm text-center px-2  mb-4 mt-1">
        Some testimonials from those who go travelling using our services
      </h1>
      <div className="flex w-[85%] mx-auto lg:w-[55%] p-12">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
          // navigation={breakpoints}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper drop-shadow-2xl"
        >
          <SwiperSlide>
            <TestimonialsCard
              name="Akash Tomar"
              tag="Photographer"
              quote="I think this is the best traveller service i have ever tried and I also
        recommended it to you"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard
              name="Suraj Gaud"
              tag="Traveller"
              quote="Thanks to Tourice i can now realize my dream of travelling around the world"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard
              name="Utsav Dev"
              tag="Socialist"
              quote="Tourice helps me a lot in finding intresting tourist destinations"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard
              name="Sumit Saxena"
              tag="Traveller"
              quote="I m totally comfort during travel experience and also it make my journey so ease."
            />
          </SwiperSlide>
          <hr className="my-2" />
          ...
        </Swiper>
      </div>
      <img
        src={airplane}
        alt="tree"
        className="w-36 lg:w-56 absolute right-0 bottom-0 opacity-80 "
      />
    </section>
  );
};

export default Testimonials;
