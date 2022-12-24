import React from "react";
import logo from "../../assets/logo.svg";
import {
  ArrowPathIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to="/"
                className="hover:text-white py-2 rounded-lg hover:bg-[#3BB77E]"
              >
                <h1 className="flex pl-4">
                  <ArrowPathIcon className="h-6 w-6 mr-3" />
                  <p>Compare</p>
                </h1>
              </Link>
              <Link
                to="/wishlist"
                className="hover:text-white py-2 rounded-lg hover:bg-[#3BB77E]"
              >
                <h1 className="flex pl-4">
                  <HeartIcon className="h-6 w-6 mr-3" />
                  <p>Wishlist</p>
                </h1>
              </Link>
              <Link
                to="/shop-cart"
                className="hover:text-white py-2 rounded-lg hover:bg-[#3BB77E]"
              >
                <h1 className="flex pl-4">
                  <ShoppingCartIcon className="h-6 w-6 mr-3" />
                  <p>Cart</p>
                </h1>
              </Link>
              <Link
                to="/account"
                className="hover:text-white py-2 rounded-lg hover:bg-[#3BB77E]"
              >
                <h1 className="flex pl-4">
                  <UserIcon className="h-6 w-6 mr-3" />
                  <p>Account</p>
                </h1>
              </Link>
            </ul>
          </div>
          <div>
            <Link to="/">
              <img className="h-12" src={logo} alt="..." />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className="hidden lg:flex">
              <h1>
                <ArrowPathIcon className="h-6 w-6" />
                <p className="hidden lg:flex">Compare</p>
              </h1>
            </li>
            <li>
              <h1>
                <HeartIcon className="h-6 w-6" />
                <p className="hidden lg:flex">Wishlist</p>
              </h1>
            </li>
            <NavLink
              to="/shop-cart"
              className={({ isActive }) =>
                `flex items-center px-5 py-2 hover:border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]  hover:text-white ${
                  isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
                }`
              }
            >
              <h1 className="flex">
                <ShoppingCartIcon className="h-6 w-6" />
                <p className="hidden lg:flex">Cart</p>
              </h1>
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `hidden lg:flex  items-center px-5 py-2 hover:border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
                  isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
                }`
              }
            >
              <h1 className="flex">
                <UserIcon className="h-6 w-6" />
                <p className="hidden lg:flex">Account</p>
              </h1>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
