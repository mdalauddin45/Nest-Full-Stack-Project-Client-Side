import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCart = ({ category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0, rotate: 0, x: 100, y: 0 }}
      animate={{
        x: 0,
        y: -100,
        scale: 1,
        transition: { duration: 3 },
        rotate: 0,
      }}
    >
      <Link
        to={`/category/${category?.name}`}
        className={`w-[154px] h-[180px]  shadow-xl rounded justify-center flex ${category.bg}`}
      >
        <div className="pt-5">
          <img
            src={category?.image}
            alt="Movie"
            className="w-[80px] h-[80px]"
          />
          <div className="text-center">
            <h2 className="text-[16px] text-[#253D4E] font-bold hover:text-[#3BB77E]">
              {category?.name}
            </h2>
            <h2 className="text-[14px] text-[#7E7E7E]">
              {category?.length} items
            </h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCart;
