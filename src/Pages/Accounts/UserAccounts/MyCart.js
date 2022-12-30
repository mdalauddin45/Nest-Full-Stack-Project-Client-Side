import {
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteorder } from "../../../api/services";
import FooterSection from "../../Shared/FooterSection";

const MyCart = () => {
  const [orderItem, setOrderItem] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrderItem(data);
        setLoading(!loading);
      });
  }, []);
  // console.log(orderItem);

  const handleBlur = (e) => setQuantity(e.target.value);
  // console.log(quantity);

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
      <h1>Your Cart</h1>
      <p>There are {orderItem?.length} products in your cart</p>
      <div className="lg:flex md:flex block">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {orderItem?.map((order) => (
                <tr key={order?._id} order={order}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {order?.name?.slice(0, 20)}
                        </div>
                        <div className="text-sm opacity-50">
                          {order?.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-2xl">${order?.price}</td>
                  <td>
                    <input
                      onChange={handleBlur}
                      className="border rounded-lg text-center border-[#3BB77E] text-2xl h-12 w-12"
                      type="number"
                      name="quantity"
                      id="quantity"
                    />
                  </td>
                  <td>{order?.price * quantity}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col max-w-md mx-10 lg:mt-0 md:mt-0 mt-10 p-6 space-y-4 divide-y sm:w-96 border rounded-lg  ">
          <div className="pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-[16px] font-bold text-[#B6B6B6]">
                Subtotal
              </span>
              <span className="text-[24px] text-[#3BB77E]">$21.50</span>
            </div>
          </div>
          <div className="pt-4 space-y-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-[16px] font-bold text-[#B6B6B6]">
                  Delivery fee
                </span>
                <span className="text-[24px] text-[#3BB77E]">free</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between">
                <span className="text-[16px] font-bold ">Total</span>
                <span className="font-semibold text-[24px] text-[#3BB77E]">
                  $22.70
                </span>
              </div>
              <button
                type="button"
                className="w-full flex py-4 px-5 font-semibold border rounded bg-[#3BB77E] text-white"
              >
                Proceed To CheckOut
                <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default MyCart;
