import {
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteorder } from "../../../api/services";
import PrimaryButton from "../../../components/Button/PrimaryButton";
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
  }, [loading]);
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
      <div className=" pt-5 pb-3">
        <h1 className="text-5xl   px-5">Your Cart</h1>
        <p className="text-2xl px-5">
          {" "}
          There are {orderItem?.length} products in your cart
        </p>
      </div>

      <div className="lg:flex  block">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
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
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 h-20">
                          <img
                            src={order?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="w-10 lg:w-full">
                        <div className="font-bold">
                          {order?.name?.slice(0, 20)}
                        </div>
                        <div className="text-sm opacity-50">
                          {order?.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-2xl pt-10 lg:pt-0">${order?.price}</td>
                  <td>
                    <input
                      onChange={handleBlur}
                      className="border rounded-lg text-center border-[#3BB77E] text-2xl h-12 w-12"
                      type="number"
                      name="quantity"
                      id="quantity"
                    />
                  </td>
                  <td>{order?.quantity}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className=" px-3 py-2 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] text-[14px] font-bold"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between px-5 py-5">
            <PrimaryButton
              classes={"bg-[#3BB77E] px-5 py-3 text-white rounded "}
            >
              <span className="text-[16px] font-bold hover:text-white">
                Continue Shopping
              </span>
            </PrimaryButton>
            <PrimaryButton
              classes={"bg-[#3BB77E] px-5 py-3 text-white rounded "}
            >
              <span className="text-[16px] font-bold hover:text-white">
                Update Cart
              </span>
            </PrimaryButton>
          </div>
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
