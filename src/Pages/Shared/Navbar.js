import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import {
  ArrowPathIcon,
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { Link, NavLink } from "react-router-dom";
import { deleteorder } from "../../api/services";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const [orders, setOrders] = useState([]);
  // const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(!loading);
      });
  }, [loading]);
  const handleDelete = (id) => {
    // console.log(id);
    deleteorder(id);
    if (id) {
      toast.success("Product Deleted Successfully");
    }
    setLoading(!loading);
  };

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
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                ` lg:flex  items-center px-2 py-2 hover:border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${
                  isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
                }`
              }
            >
              <h1 className="flex">
                <HeartIcon className="h-6 w-6" />
                <p className="hidden lg:flex px-2">wishlist</p>
              </h1>
            </NavLink>

            <div>
              <div className="dropdown dropdown-end px-2 ">
                <div className="flex  hover:border rounded-lg px-2    hover:bg-[#3BB77E]  hover:text-white">
                  {user?.email ? (
                    <>
                      <label tabIndex={0} className="pt-3">
                        <div className="indicator">
                          <ShoppingCartIcon className="h-6 w-6 " />
                          <span className="badge badge-sm indicator-item bg-[#3BB77E] border-none py-3">
                            {orders?.length}
                          </span>
                        </div>
                      </label>
                    </>
                  ) : (
                    <></>
                  )}
                  <p className="hidden lg:flex pt-3 mx-4">Cart</p>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-[300px] bg-base-100 shadow"
                >
                  <div className="card-body">
                    {orders?.map((order) => (
                      <div
                        order={order}
                        key={order._id}
                        className="flex justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className=" w-20 h-20">
                              <img
                                src={order?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div className=" lg:w-full">
                            <div className="font-bold">
                              {order?.name?.slice(0, 20)}
                            </div>
                            <div className="text-sm opacity-50">
                              1 X ${order?.price}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className=" h-10 py-2 px-2 mt-5 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] text-[14px] font-bold"
                        >
                          <TrashIcon className="w-6 h-6" />
                        </button>
                      </div>
                    ))}
                    <div className="card-actions flex justify-between  py-5">
                      <Link
                        to={"/shop-cart"}
                        className={
                          "bg-[#3BB77E] px-5 py-3 text-white rounded text-[16px] font-bold hover:text-white"
                        }
                      >
                        View Cart
                      </Link>
                      <Link
                        to="/checkout"
                        className={
                          "bg-[#3BB77E] px-5 py-3 text-white rounded text-[16px] font-bold hover:text-white"
                        }
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                <p className="hidden lg:flex px-2">Account</p>
              </h1>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
