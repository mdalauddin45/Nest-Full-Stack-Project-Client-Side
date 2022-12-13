import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const { name, image, price, category, shop, rating } = product;
  return (
    <div className="card lg:w-76 w-96 bg-base-100 shadow hover:shadow-[#3BB77E]">
      <figure>
        <img className="w-72 pt-6" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>{category}</p>
        <h2 className="card-title text-[#253D4E]">{name}</h2>
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
        <div className="card-actions justify-between">
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
