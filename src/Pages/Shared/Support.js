import React from "react";
import { motion } from "framer-motion";

const Support = ({ Supporrt }) => {
  // console.log(Supporrt);
  const { image, title, description } = Supporrt;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0, rotate: 0, x: 100, y: 0 }}
      animate={{
        x: 0,
        y: -50,
        scale: 1,
        transition: { duration: 3 },
        rotate: 0,
      }}
    >
      <div className="card card-side bg-[#F4F6FA] rounded-xl pl-3 lg:w-[240px] h-[140px] ">
        <figure>
          <img src={image} alt="Movie" className="w-14 h-14" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#242424] text-[18px]">{title}</h2>
          <h2 className="text-[#adadad] text-[16px]">{description}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Support;
