import React from "react";
import { Link } from "react-router-dom";

const CategoryCart = ({ category }) => {
  return (
    <Link
      to={`/category/${category?.name}`}
      className={`w-[154px] h-[180px]  shadow-xl rounded justify-center flex ${category.bg}`}
    >
      <div className="pt-5">
        <img src={category?.image} alt="Movie" className="w-[80px] h-[80px]" />
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
  );
};

export default CategoryCart;
