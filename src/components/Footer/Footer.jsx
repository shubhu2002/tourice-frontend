import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col pt-6 ">
      <hr className="h-[2px] my-6 bg-textLight" />
      <div className=" w-full flex flex-col md:flex-row gap-6 items-center flex-wrap md:flex-none justify-evenly mb-6">
        <h1 className="w-auto text-xl tracking-widest">
          Explore The World With Us......
        </h1>
        <div className="flex gap-16">
          <a href="#" className=" hover:animate-pulse">
            <Facebook />
          </a>
          <a href="#" className=" hover:animate-pulse">
            <Youtube />
          </a>
          <a href="#" className=" hover:animate-pulse">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="w-[90%] mx-auto text-center text-xs">
        <h1 className="font-semibold my-3 tracking-widest">
          Copyright 2023 ,Design & Developed By Shubhanshu Saxena. All Rights
          Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
