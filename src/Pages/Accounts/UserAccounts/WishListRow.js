import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";

const WishListRow = ({ order, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { name, image, price, category, shop, rating } = order;
  const handleOrders = (id) => {
    console.log(id);
    const order = {
      id,
      coustomarName: user?.displayName,
      email: user?.email,
      name,
      image,
      price,
      category,
      shop,
      rating,
      quentity: 1,
    };
    console.log(order);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("order place Succesfully");
      })
      .catch((err) => console.error(err));
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-20 h-20">
              <img src={order?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div className="w-10 lg:w-full">
            <div className="font-bold">{order?.name?.slice(0, 20)}</div>
            <div className="text-sm opacity-50">{order?.category}</div>
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
        <button
          onClick={() => handleOrders(order._id)}
          className={
            " bg-[#3BB77E] px-5 py-3 text-white rounded text-[16px] font-bold "
          }
        >
          Add To Cart
        </button>
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
  );
};

export default WishListRow;
