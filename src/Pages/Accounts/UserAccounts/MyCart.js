import {
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const MyCart = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>There are 3 products in your cart</p>
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
              <tr>
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
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </th>
              </tr>
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
    </div>
  );
};

export default MyCart;
