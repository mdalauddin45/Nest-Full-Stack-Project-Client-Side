import {
  ArrowPathRoundedSquareIcon,
  BuildingStorefrontIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const HostMenu = () => {
  return (
    <>
      <NavLink
        to="/account/shop"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <BuildingStorefrontIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">My Shop</span>
      </NavLink>
      <NavLink
        to="/account/addproduct"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <PlusCircleIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Add Products</span>
      </NavLink>
      <NavLink
        to="/account/updateproduct"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ArrowPathRoundedSquareIcon className="w-6 h-6 " />

        <span className="mx-4 font-medium">Update Products</span>
      </NavLink>
    </>
  );
};

export default HostMenu;
