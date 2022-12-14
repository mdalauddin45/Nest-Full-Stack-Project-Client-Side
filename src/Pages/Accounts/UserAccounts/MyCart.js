import {
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  deleteCheckOut,
  deleteorder,
  getOrders,
  updateCheckOut,
} from "../../../api/services";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import FooterSection from "../../Shared/FooterSection";
import empty from "../../../assets//Banar/Empty.png";

const MyCart = () => {
  const [orderItem, setOrderItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";
  const fetchProducts = () =>
    getOrders(user?.email).then((data) => {
      setOrderItem(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user, loading]);
  // console.log(orderItem);

  const handleDelete = (id) => {
    // console.log(id);
    deleteorder(id);
    deleteCheckOut(id);
    if (id) {
      toast.success("Product Deleted Successfully");
    }
    setLoading(!loading);
  };
  // console.log(orderItem);
  // total price
  const total = orderItem?.reduce((acc, cur) => acc + cur.subtotal, 0);

  // delevery charge
  if (total > 1000) {
    var deleveryCharge = 100;
  } else {
    var deleveryCharge = 50;
  }
  // total price with delevery charge
  const totalWithDeleveryCharge = total + deleveryCharge;

  //check out
  const handleCheckOut = () => {
    // total price
    const total = orderItem?.reduce((acc, cur) => acc + cur.subtotal, 0);
    const orderItemForCheckOut = orderItem?.map((order) => {
      return {
        id: order.id,
        coustomarName: order.coustomarName,
        email: order.email,
        name: order.name,
        image: order.image,
        price: order.price,
        category: order.category,
        shop: order.shop,
        quantity: order.quantity,
        subtotal: order.subtotal,
      };
    });
    const checkOutData = {
      coustomarName: user?.displayName,
      email: user?.email,
      orderItem: orderItemForCheckOut,
      total: total,
      deleveryCharge: deleveryCharge,
      totalWithDeleveryCharge: totalWithDeleveryCharge,
    };

    updateCheckOut(checkOutData).then((data) => {
      console.log(data);
      setLoading(!loading);
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      {orderItem.length > 0 ? (
        <div className="pb-32">
          <div className=" pt-5 space-y-2">
            <h1 className="text-5xl   px-5 ">Your Cart</h1>
            <h1 className="text-2xl px-5 pb-2">
              There are {orderItem?.length} products in your cart
            </h1>
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
                      <td className="text-2xl pt-10 lg:pt-0">
                        ${order?.price}
                      </td>

                      <td>{order?.quantity}</td>
                      <td className="text-2xl pt-10 lg:pt-0">
                        ${order?.subtotal?.toFixed(2)}
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(order?._id)}
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
                  <h1 className="text-[16px] font-bold hover:text-white">
                    Continue Shopping
                  </h1>
                </PrimaryButton>
                <PrimaryButton
                  classes={"bg-[#3BB77E] px-5 py-3 text-white rounded "}
                >
                  <h1 className="text-[16px] font-bold hover:text-white">
                    Update Cart
                  </h1>
                </PrimaryButton>
              </div>
            </div>

            <div className="flex flex-col max-w-md mx-10 lg:mt-0 md:mt-0 mt-10 p-6 space-y-4 divide-y sm:w-96 border rounded-lg  ">
              <div className="pt-4 space-y-2">
                <div className="flex justify-between">
                  <h1 className="text-[16px] font-bold text-[#B6B6B6]">
                    Subtotal
                  </h1>
                  <h1 className="text-[24px] text-[#3BB77E]">
                    ${total.toFixed(2)}
                  </h1>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-bold text-[#B6B6B6]">
                      Delivery fee
                    </h1>
                    <h1 className="text-[24px] text-[#3BB77E]">
                      ${deleveryCharge}
                    </h1>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-bold ">Total</h1>
                    <h1 className="font-semibold text-[24px] text-[#3BB77E]">
                      {totalWithDeleveryCharge}
                    </h1>
                  </div>
                  <button
                    onClick={handleCheckOut}
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
      ) : (
        <div className="mb-16">
          <div className="text-center items-center py-10">
            <div className="flex justify-center">
              <img src={empty} alt="" />
            </div>
            <div className="text-2xl pb-10">
              <h1>Uh-oh! Your Cart appears to be empty!</h1>
              <h1>Try Purbliss soap today!</h1>
            </div>
            <Link
              to="/products"
              className="hover:bg-[#3BB77E] hover:text-white  text-gary-300 w-full px-8 py-3 font-semibold rounded-md bg-[#3BB77E] text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
      <FooterSection />
    </div>
  );
};

export default MyCart;
