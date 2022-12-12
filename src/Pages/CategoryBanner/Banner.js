import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Banner = ({ banner }) => {
  console.log(banner);
  return (
    <div className="card ">
      <figure>
        <img src={banner?.image} alt="fruit" />
      </figure>
      <div className="absolute   py-20 px-5">
        <h2 className="font-bold text-2xl  text-[#253D4E] ">{banner.title}</h2>
        <div className="py-4">
          <button className=" hover:bg-[#ffc107] bg-[#3BB77E] text-white text-[12px] px-2 py-2 rounded flex font-bold">
            Shop Now <ArrowRightIcon className="h-4 ml-2 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
