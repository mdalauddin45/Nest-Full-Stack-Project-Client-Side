import { ArrowRightOnRectangleIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { getCheckout } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";
import FooterSection from "../../Shared/FooterSection";

const CheckOut = () => {
  const [orders, getOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const fetchProducts = () =>
    getCheckout(user?.email).then((data) => {
      getOrders(...data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user]);
  const orderItems = orders?.orderItem;
  //   console.log(orderItems);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // total amount
  const total = orderItems?.reduce((acc, cur) => acc + cur.subtotal, 0);
  //   console.log(total);
  return (
    <div className="px-10 space-y-3">
      <h1>Checkout</h1>
      <h1>
        There are <span>3</span> products in your cart
      </h1>
      <div>
        <div>
          <h1>Billing Details</h1>
          <form onSubmit={handleSubmit} noValidate="" action="">
            <div className="flex">
              <div className="space-y-5 w-[50%]">
                <div className="flex space-x-4  px-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                </div>
                <div className="flex space-x-4 px-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    placeholder="Address"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                  <input
                    type="text"
                    name="address2"
                    id="  address2"
                    required
                    placeholder="Address 2"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                </div>
                <div className="flex space-x-4 px-2">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    placeholder="Country"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    placeholder="City"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                </div>
                <div className="flex space-x-4 px-2">
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    required
                    placeholder="Postal Code"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                </div>
                <div className="flex space-x-4 px-2">
                  <input
                    type="text-area"
                    name="additionalInfo"
                    id="additionalInfo"
                    required
                    placeholder="Additional Info"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 border rounded-md">
                  <h2 className="text-xl font-semibold">Your cart</h2>
                  <ul className="flex flex-col divide-y divide-gray-700">
                    {orderItems?.map((item) => (
                      <li
                        item={item}
                        key={item.id}
                        className="flex flex-col py-6 sm:flex-row sm:justify-between"
                      >
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                            src={item?.image}
                            alt="Polaroid camera"
                          />
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                  {item?.name}
                                </h3>
                                <div className="flex text-yellow-400 text-sm">
                                  <StarIcon className="h-4 w-4" />
                                  <StarIcon className="h-4 w-4" />
                                  <StarIcon className="h-4 w-4" />
                                  <StarIcon className="h-4 w-4" />
                                  <StarIcon className="h-4 w-4" />
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold">
                                  ${item?.price}
                                </p>
                                <p className="text-sm dark:text-gray-600">
                                  {item.quantity} X ${item?.price} = $
                                  {item?.subtotal.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-1 text-right">
                    <p>
                      Total amount:
                      <span className="font-semibold"> ${total}</span>
                    </p>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md dark:border-green-400"
                    >
                      Back
                      <span className="sr-only sm:not-sr-only">to shop</span>
                    </button>
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md dark:bg-green-400 dark:text-gray-900 dark:border-green-400"
                    >
                      <span className="sr-only sm:not-sr-only">
                        Continue to
                      </span>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default CheckOut;
