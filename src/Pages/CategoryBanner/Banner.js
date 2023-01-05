import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion } from "framer-motion";

const Banner = ({ banner }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{
        x: 0,
        y: -50,
        scale: 1,
        rotate: 0,
        transition: { duration: 2 },
      }}
    >
      <div className="card">
        <figure>
          <img src={banner?.image} alt="fruit" />
        </figure>
        <div className="absolute  py-2 md:py-20 lg:py-[10%] px-5">
          <h2 className=" md:text-xl lg:text-2xl  text-[#253D4E] ">
            {banner.title}
          </h2>
          <div className="py-4">
            <button className=" hover:bg-[#ffc107] bg-[#3BB77E] text-white text-[12px] px-2 py-2 rounded flex font-bold">
              Shop Now <ArrowRightIcon className="h-4 ml-2 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
