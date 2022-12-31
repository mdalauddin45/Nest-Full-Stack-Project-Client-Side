import { MapPinIcon, PhoneIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";
import twitter from "../../../assets/Shop/social-tw.svg";
import facebook from "../../../assets/Shop/social-fb.svg";
import insta from "../../../assets/Shop/social-insta.svg";
import ping from "../../../assets/Shop/social-pin.svg";
import { Link } from "react-router-dom";

const HostProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = () =>
    getProducts(user?.email).then((data) => {
      setProducts(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user, loading]);
  // console.log(products);

  //   console.log(user);
  return (
    <div className="w-96">
      <div className="flex flex-col justify-center max-w-xs px-8 py-6 shadow-md rounded-xl  text-gray-900 bg-[#d1e8f2]">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4  divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <p className="text-[14px]">Since 2012</p>
            <h2 className="text-xl font-semibold text-[24px] space-y-1">
              {user?.displayName}
            </h2>
            <div className="flex text-yellow-400 text-[14px] ">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <p className="text-[#253D4E] ml-2"> 4.0</p>
            </div>
            <p className="space-y-1 text-[14px]">
              Got a smooth, buttery spread in your fridge? Chances are good that
              it's Good Chef. This brand made Lionto's list of the most popular
              grocery brands across the country.
            </p>
            <p className="space-y-1 text-[16px]font-bold">Follow Us</p>
            <div className="flex space-y-1">
              <img src={twitter} className="px-1" alt="" />
              <img src={facebook} className="px-1" alt="" />
              <img src={insta} className="px-1" alt="" />
              <img src={ping} className="px-1" alt="" />
            </div>
            <div className="flex space-y-1">
              <MapPinIcon className="h-10 w-10 text-[#3BB77E]" />
              <p className="px-1">
                Address: 5171 W Campbell Ave undefined, Utah 53127 United States
              </p>
            </div>
            <div className="flex space-y-1">
              <PhoneIcon className="h-5 w-5  text-[#3BB77E]" />
              <p className="px-1">Call Us:(+91) - 540-025-124553</p>
            </div>
            <div>
              <Link>
                <button className="bg-[#3BB77E] text-white mt-2 px-4 py-2 rounded-sm font-bold">
                  Contact Seller
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;
