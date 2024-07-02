import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ImageData, testimonialsData } from "../data";
import { Star } from "lucide-react";

const StarIcon = () => {
  return <Star stroke="orange" fill="yellow" width={14} />;
};

const Testimonials = () => {
  return (
    <section className="w-full  flex flex-col items-center relative pt-8 my-12 dark:bg-secondaryBG ">
      <img
        src={ImageData.airplane}
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
          {testimonialsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className=" bg-white border-2 text-center flex flex-col items-center rounded-3xl relative dark:text-black">
                  <div className="overlay w-full flex flex-col items-center bg-lime-200 rounded-[20px_20px_0px_20px] py-2">
                    <img
                      src={ImageData.man}
                      alt=""
                      width={70}
                      className=" bg-center mb-2"
                    />
                    <h1 className="font-semibold text-black">{item.name}</h1>
                    <span className="text-xs">{item.tag}</span>
                    <span className="flex gap-1">
                      {Array(5)
                        .fill(true)
                        .map((item, index) => (
                          <StarIcon key={index} />
                        ))}
                    </span>
                  </div>
                  <p className="w-56 text-xs mt-5 mb-3 px-1">
                    &quot;{item.quote}&quot;
                  </p>
                  <img
                    src={ImageData.comma}
                    alt="comma"
                    className="w-7 text-gray -ml-3 mb-3"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <hr className="my-2" />
          ...
        </Swiper>
      </div>
      <img
        src={ImageData.airplane}
        alt="tree"
        className="w-36 lg:w-56 absolute right-0 bottom-0 opacity-80 "
      />
    </section>
  );
};

export default Testimonials;
