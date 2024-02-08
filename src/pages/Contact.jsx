import CommonSection from "../shared/CommonSection";
import Subscribe from "../shared/Subscribe";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import {ImageData} from "../data";

const {tree} = ImageData;

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section className="w-full pt-[90px]">
      <CommonSection title={`Contact us`} />
      <main className=" w-full px-6 lg:px-12 flex flex-col gap-6  ">
        <p className="lg:text-xl text-center">
          We're here to help you plan your dream vacation! Feel free to reach
          out to us with any questions, inquiries, or booking requests. Our
          dedicated team of travel experts is ready to assist you.
        </p>
        <hr />
        <h1 className="text-xl text-center">Contact Information </h1>
        <div className="w-full lg:px-28 relative flex flex-col gap-6">
          <img
            src={tree}
            alt="tree"
            className="absolute z-0 w-60 lg:w-52 opacity-50 md:opacity-100 -right-5 bottom-0 lg:right-36 lg:-top-10"
          />
          <ul className="flex flex-col gap-1 relative">
            <h1 className="text-lg">Address : </h1>
            <li>245, Balwant Nagar</li>
            <li>Gwalior , Madhya Pradesh</li>
            <li>Zip Code : 474012</li>
          </ul>

          <ul className="flex flex-col gap-1 relative">
            <h1 className="text-lg">Emails - </h1>
            <li>General Enquires - info@tourice.com</li>
            <li>Customer Support - support@tourice.com</li>
            <li>Bookings - bookings@tourice.com</li>
          </ul>

          <ul className="flex flex-col gap-1 relative">
            <h1 className="text-lg ">Social Media - </h1>
            <li>Facebook : https://www.facebook.com/Tourice</li>
            <li>Twitter : https://www.twitter.com/Tourice</li>
            <li>Instagram : https://www.instagram.com/Tourice</li>
          </ul>
        </div>
        <hr />
        <h1 className="lg:text-xl text-center">
          We look forward to assisting you in planning your next unforgettable
          adventure!
        </h1>
      </main>
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Contact;
