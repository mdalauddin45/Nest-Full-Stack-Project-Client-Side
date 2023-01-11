import {
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { addOrder, addWishlist } from "../../api/services";
import { AuthContext } from "../../contexts/AuthProvider";
import FooterSection from "../Shared/FooterSection";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const { name, image, price, description, category, rating, shop, _id } =
    product;
  const handleWishlist = (id) => {
    const productData = {
      id,
      coustomarName: user?.displayName,
      email: user?.email,
      name,
      image,
      price,
      category,
      shop,
      rating,
    };
    // console.log(order);
    addWishlist(productData)
      .then((data) => {
        console.log(data);
        toast.success("Added Successfuly !");
      })

      .catch((err) => console.error(err));
  };
  const handleOrders = (id) => {
    console.log(id);
    const order = {
      id,
      coustomarName: user?.displayName,
      email: user?.email,
      name,
      image,
      price,
      category,
      shop,
      rating,
      quantity,
      subtotal: price * quantity,
    };
    // console.log(order);
    addOrder(order)
      .then((data) => {
        // console.log(data);
        toast.success("Added Successfuly !");
      })
      .catch((err) => console.error(err));
  };

  const handleBlur = (e) => setQuantity(e.target.value);
  // console.log(quantity);
  if (quantity < 0) {
    toast.error("Quantity can't be negative");
  }

  return (
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" lg:flex md:flex overflow-hidden bg-white  rounded ">
        <div className="border lg:w-[334px] lg:h-[334px] rounded-lg ">
          <img src={image} alt="" className="object-cover w-full  " />
        </div>
        <div className="flex flex-col justify-center px-8 bg-white lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-[30px] font-serif font-bold ">{name}</h5>
          <div className="flex text-yellow-400">
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <StarIcon className="h-6 w-6" />
            <p className="text-[#253D4E] ml-2"> ({rating})</p>
          </div>

          <div className="flex items-center">
            <p className="text-[58px] text-[#3BB77E] font-bold">${price}</p>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>
          <div className="flex ">
            {user?.email ? (
              <>
                <div className="pr-2 pt-5">
                  <input
                    onChange={handleBlur}
                    className="border rounded-lg text-center border-[#3BB77E] text-2xl h-14 w-12"
                    type="number"
                    name="quantity"
                    id="quantity"
                    defaultValue={1}
                  />
                </div>
                {quantity < 0 ? (
                  <button
                    disabled
                    onClick={() => handleOrders(_id)}
                    className="my-5 px-2 py-4 text-white rounded flex w-40 bg-[#3BB77E] text-[16px] font-bold"
                  >
                    <ShoppingCartIcon className="h-6 w-6 mx-2 " /> Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleOrders(_id)}
                    className="my-5 px-2 py-4 text-white rounded flex w-40 bg-[#3BB77E] text-[16px] font-bold"
                  >
                    <ShoppingCartIcon className="h-6 w-6 mx-2 " /> Add to Cart
                  </button>
                )}
                <HeartIcon
                  onClick={() => handleWishlist(_id)}
                  className="border rounded-md py-2 px-2 ml-6 mt-5  h-14 w-14 hover:bg-[#3BB77E] hover:text-white "
                />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="my-5 px-2 py-4 text-white rounded flex w-40 bg-[#3BB77E] text-[16px] font-bold"
                >
                  <ShoppingCartIcon className="h-6 w-6 mx-2 " /> Add to Cart
                </Link>
                <Link to="/login">
                  <HeartIcon className="border rounded-md py-2 px-2 ml-6 mt-5  h-14 w-14 hover:bg-[#3BB77E] hover:text-white " />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" px-5 py-5">
        <h1 className="text-2xl font-bold pb-2">Description</h1>
        {description ? (
          description
        ) : (
          <>
            <div>
              <p>
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart.
              </p>
            </div>
          </>
        )}
      </div>
      <div className="pt-20">
        <FooterSection />
      </div>
    </div>
  );
};

export default ProductDetails;
