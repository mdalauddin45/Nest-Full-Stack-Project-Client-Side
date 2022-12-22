import { StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-hot-toast";
import { deleteproduct } from "../../../api/services";

const HostProductsCard = ({ product, loading, setLoading }) => {
  const { name, image, price, category, shop, rating, _id } = product;
  //   console.log(product);
  const handleDelet = (id) => {
    if (id) {
      deleteproduct(id);
      toast.success("delete Product Succussfuly");
      setLoading(!loading);
    }
  };
  return (
    <div className="card lg:w-68 md:w-68 w-68  shadow hover:shadow-[#3BB77E]">
      <figure>
        <img className="w-72 pt-6" src={image} alt="/" />
      </figure>
      <div className="px-3 ">
        <h1>{category}</h1>
        <h2 className="card-title text-[#253D4E]">
          {name?.split(0, 15) + "..."}
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
        <div
          onClick={() => handleDelet(_id)}
          className="flex justify-between pb-6"
        >
          <button className="text-xl font-semibold text-[#3BB77E]">
            ${price}
          </button>
          <button className=" px-3 py-2 bg-[#fde0e9] text-[#f74b81] rounded flex  font-bold">
            <TrashIcon className="h-6 w-6 mx-2 " /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostProductsCard;
