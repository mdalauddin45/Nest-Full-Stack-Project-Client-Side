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
    <>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6 font-bold" />

        <span className="mx-4 font-medium">Dashboard</span>
      </NavLink>

      <NavLink
        to="become-host"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <ShoppingBagIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Orders</span>
      </NavLink>
      <NavLink
        to="become-host"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <ShoppingCartIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Track Your Orders</span>
      </NavLink>
      <NavLink
        to="become-host"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MapPinIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">My Address</span>
      </NavLink>
      <NavLink
        to="become-host"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <UserIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Account Details</span>
      </NavLink>
    </>
  );
};

export default UserMenu;
