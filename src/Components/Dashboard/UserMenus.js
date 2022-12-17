import {
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-xl">
      <NavLink
        to="/account/dashboard"
        className={({ isActive }) =>
          `flex items-center mt-5   transition-colors duration-300  pl-6 py-4 border rounded-lg transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6 font-bold" />

        <span className="mx-4 font-medium">Dashboard</span>
      </NavLink>

      <NavLink
        to="/account/orders"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ShoppingBagIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Orders</span>
      </NavLink>
      <NavLink
        to="/account/trackorders"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <ShoppingCartIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Track Your Orders</span>
      </NavLink>
      <NavLink
        to="/account/address"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <MapPinIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">My Address</span>
      </NavLink>
      <NavLink
        to="/account/accountdetails"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform   hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <UserIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Account Details</span>
      </NavLink>
    </div>
  );
};

export default UserMenu;
