import {
  ExclamationTriangleIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        to="/account/profile"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <HomeIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Profile</span>
      </NavLink>
      <NavLink
        to="/account/seller"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5 mx-0   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <UserGroupIcon className="w-6 h-6" />

        <span className="px-4 font-medium">All Seller</span>
      </NavLink>
      <NavLink
        to="/account/buyer"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5 mx-0   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <UserGroupIcon className="w-6 h-6" />

        <span className="px-4 font-medium">All Buyer</span>
      </NavLink>
      <NavLink
        to="/account/booking"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ShoppingBagIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">All Booking</span>
      </NavLink>
      <NavLink
        to="/account/reports"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ExclamationTriangleIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">All Reports</span>
      </NavLink>
    </>
  );
};

export default AdminMenu;
