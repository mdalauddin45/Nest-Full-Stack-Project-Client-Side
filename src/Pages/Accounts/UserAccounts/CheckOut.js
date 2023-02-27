import { ArrowRightOnRectangleIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { getCheckout } from "../../../api/services";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import FooterSection from "../../Shared/FooterSection";
import paypal from "../../../assets/Payment/payment-paypal.svg";
import visa from "../../../assets/Payment/payment-visa.svg";
import master from "../../../assets/Payment/payment-master.svg";
import zapper from "../../../assets/Payment/payment-zapper.svg";
import { toast } from "react-hot-toast";

const CheckOut = () => {
  const [orders, getOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paymetMethod, setPaymentMethod] = useState("paypal");
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
  console.log(orderItems);
  const _id = orders?._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const address2 = e.target.address2.value;
    const city = e.target.city.value;
    const postalCode = e.target.postalCode.value;
    const country = e.target.country.value;
    const addtionalInfo = e.target.additionalInfo.value;
    if (paymetMethod === "cash on delivery") {
      const order = {
        service: _id,
        name: firstName + " " + lastName,
        address: address + " " + address2,
        country,
        city,
        postalCode,
        email,
        orderItems,
        addtionalInfo,
        paymetMethod,
        total,
        orderDate: new Date(),
      };
      console.log(order);
      fetch("https://nest-mauve.vercel.app/confirmorder", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("nest-token")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Order Placed Successfully");
          window.location.replace(data.url);
          console.log(data);
        })
        .catch((er) => console.error(er));
    }
    const order = {
      service: _id,
      name: firstName + " " + lastName,
      address: address + " " + address2,
      country,
      city,
      postalCode,
      email,
      orderItems,
      addtionalInfo,
      paymetMethod,
      total,
      orderDate: new Date(),
    };
    console.log(order);
    fetch("https://nest-mauve.vercel.app/confirmorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("nest-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        toast.success("Order Placed Successfully");
        console.log(data);
      })
      .catch((er) => console.error(er));
  };

  // total amount
  const total = orderItems?.reduce((acc, cur) => acc + cur.subtotal, 0);
  //   console.log(total);
  return (
    <div className="px-10 space-y-3">
      <h1 className="text-[48px] font-bold">Checkout</h1>
      <h1>
        There are{" "}
        <span className="text-[#3BB77E] text-[16px]">{orderItems?.length}</span>{" "}
        products in your cart
      </h1>
      <div className="pb-20">
        <div>
          <h1 className="text-[24px] font-bold">Billing Details</h1>
          <form onSubmit={handleSubmit} noValidate="" action="">
            <div className="lg:flex ">
              <div className="space-y-5 lg:w-[50%]">
                <div className="flex space-x-4  px-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                    defaultValue={orders?.name}
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                    defaultValue={orders?.name}
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
                    defaultValue={orders?.address}
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
                  {/* <input
                    type="text-area"
                    name="additionalInfo"
                    id="additionalInfo"
                    required
                    placeholder="Additional Info"
                    className="w-full h-60 px-4  border rounded-md  focus:outline-green-500  text-gray-900 "
                  /> */}
                  <textarea
                    name="additionalInfo"
                    id="additionalInfo"
                    required
                    placeholder="Additional Info"
                    className="textarea textarea-bordered w-full h-60 px-4  border rounded-md  focus:outline-green-500  text-gray-900 "
                  ></textarea>
                </div>
              </div>
              <div className="lg:w-[50%] lg:px-0 px-2 py-10 lg:py-0 lg:pl-10 ">
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
                </div>

                <h1 className="text-[24px] font-bold pt-10 pb-3">Payment</h1>
                <div className="space-y-3">
                  <div className="flex  ">
                    <input
                      type="radio"
                      name="radio-5"
                      className="radio radio-success mr-2"
                      required
                      onBlur={() => setPaymentMethod("Bank Transfer")}
                    />
                    Direct Bank Transfer
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      name="radio-5"
                      className="radio radio-success mr-2"
                      required
                      onBlur={() => setPaymentMethod("cash on delivery")}
                    />
                    Cash On Delivery
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      name="radio-5"
                      className="radio radio-success mr-2"
                      required
                      onBlur={() => setPaymentMethod("Online Getway")}
                    />
                    Online Getway
                  </div>
                  <div className="flex space-x-5 pt-2">
                    <img src={paypal} alt="" />
                    <img src={visa} alt="" />
                    <img src={master} alt="" />
                    <img src={zapper} alt="" />
                  </div>
                </div>
                <div className="pt-10">
                  {orderItems?.length === "undefined" ? (
                    <PrimaryButton
                      type="submit"
                      classes="flex px-8 py-3 font-semibold rounded-md bg-[#3BB77E] text-white  disabled"
                    >
                      {"Place an Order  "}
                      <ArrowRightOnRectangleIcon className=" h-6 w-6" />
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      type="submit"
                      classes="flex px-8 py-3 font-semibold rounded-md bg-[#3BB77E] text-white "
                    >
                      {"Place an Order  "}
                      <ArrowRightOnRectangleIcon className=" h-6 w-6" />
                    </PrimaryButton>
                  )}
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
