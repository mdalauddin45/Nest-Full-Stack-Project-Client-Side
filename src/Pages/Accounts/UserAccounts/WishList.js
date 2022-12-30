import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteWishlit } from "../../../api/services";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import FooterSection from "../../Shared/FooterSection";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data);
        setLoading(!loading);
      });
  }, [loading]);
  console.log(wishlist);
  const handleDelete = (id) => {
    // console.log(id);
    deleteWishlit(id);
    if (id) {
      toast.success("Remove wishlist  Successfully");
    }
    setLoading(!loading);
  };
  return (
    <div>
      <h1>this is wishlist</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist?.map((order) => (
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
                  <h1 className="w-20 px-3 py-2 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] text-[14px] font-bold">
                    In Stock
                  </h1>
                </td>
                <td>
                  <PrimaryButton
                    classes={"bg-[#3BB77E] px-5 py-3 text-white rounded "}
                  >
                    <span className="text-[16px] font-bold hover:text-white">
                      Add To Cart
                    </span>
                  </PrimaryButton>
                </td>
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
      </div>
      <FooterSection />
    </div>
  );
};

export default WishList;
