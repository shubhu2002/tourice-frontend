import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col pt-6 ">
      <div className=" w-full flex flex-col md:flex-row gap-12 items-center flex-wrap md:flex-none justify-evenly">
        <ul className=" flex flex-row md:flex-col justify-end gap-6 ">
          <li className="w-40 md:w-44">Explore The World With Us......</li>
          <li className="flex gap-8">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Youtube />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </li>
        </ul>
        <div className="flex gap-24 md:gap-48 lg:gap-72">
          <ul className="flex flex-col gap-2">
            <li className="font-bold pb-2">Discover</li>
            <li>Home</li>
            <li>About</li>
            <li>Featured</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="font-bold pb-2">Quick Links</li>
            <li>Book Now</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
        
      </div>
      <div className="w-[90%] mx-auto text-center text-xs">
        <hr className="h-[2px] mt-6 bg-textLight" />
        <h1 className="font-semibold my-3">
          Copyright 2023 ,Design & Developed By Shubhanshu Saxena. All Rights
          Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
