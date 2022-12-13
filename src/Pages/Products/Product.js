import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Product = ({ product }) => {
  const { name, image, price, category, shop, rating } = product;

  return (
    <div className="card lg:w-68 md:w-68 w-68  shadow hover:shadow-[#3BB77E]">
      <figure>
        <img className="w-72 pt-6" src={image} alt="/" />
      </figure>
      <div className="px-3 ">
        <h1>{category}</h1>
        <h2 className="card-title text-[#253D4E]">
          {name.split(0, 15) + "..."}
        </h2>
        <div className="flex text-yellow-400">
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <p className="text-[#253D4E] ml-2"> ({rating})</p>
        </div>
        <h1 className="flex">
          By <p className="text-[#3BB77E] ml-1">{shop}</p>
        </h1>
        <div className="flex justify-between pb-6">
          <button className="text-xl font-semibold text-[#3BB77E]">
            ${price}
          </button>
          <button className=" px-3 py-2 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] font-bold">
            <ShoppingCartIcon className="h-6 w-6 mx-2 " /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
