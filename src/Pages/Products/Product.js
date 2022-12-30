import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Product = ({ product }) => {
  const { name, image, price, category, shop, rating, _id } = product;
  const { user } = useContext(AuthContext);
  const handleOrders = (id) => {
    const order = {
      id,
      coustomarName: user?.displayName,
      email: user?.email,
      name,
      image,
      price,
      category,
      shop,
    };
    // console.log(order);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("order place Succesfully");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card lg:w-68 md:w-68 w-68 h-96  shadow hover:shadow-[#3BB77E]">
      <figure>
        <img className="w-72 h-60 pt-2" src={image} alt="/" />
      </figure>
      <div className="px-3 ">
        <h1 className="text-[12px]">{category}</h1>
        <Link
          to={`/product/${_id}`}
          className="card-title text-[16px] text-[#253D4E]"
        >
          {name?.split(0, 15) + "..."}
        </Link>
        <div className="flex text-yellow-400 text-sm">
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <p className="text-[#253D4E] ml-2"> ({rating})</p>
        </div>
        <h1 className="flex text-[14px]">
          By <p className="text-[#3BB77E] ml-1">{shop}</p>
        </h1>
        <div className="flex justify-between pb-6">
          <button className="text-[18px] font-semibold text-[#3BB77E]">
            ${price}
          </button>
          <button
            onClick={() => handleOrders(_id)}
            className=" px-3 py-2 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] text-[14px] font-bold"
          >
            <ShoppingCartIcon className="h-4 w-4 mx-2 " /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
