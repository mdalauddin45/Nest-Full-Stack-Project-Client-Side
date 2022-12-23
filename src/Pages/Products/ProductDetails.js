import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, image, price, description, category, rating, shop } = product;
  console.log(product);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col-1 md:felx-col-2 lg:felx-col-2 max-w-screen-lg overflow-hidden bg-white  rounded ">
        <div className="border rounded-lg ">
          <img src={image} alt="" className="object-cover w-full  " />
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div></div>
          <h5 className="mb-3 text-[30px] font-bold ">{name}</h5>

          <p className="mb-5 text-gray-900">Rating: {rating}</p>

          <div className="flex items-center">
            <p className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-deep-purple-800">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
