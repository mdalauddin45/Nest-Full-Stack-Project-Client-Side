import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();

  //   console.log(location.search);
  const query = new URLSearchParams(location.search);

  const transactionId = query.get("transactionId");
  console.log(transactionId);

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(
      `https://nest-server-side.vercel.app/confirmorder/by-transaction-id/${transactionId}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [transactionId]);
  console.log(order);

  if (!order?._id) {
    return <div>No order found</div>;
  }

  console.log(order.orderItems);
  //deliveredDate
  const deliveredDate = new Date(order?.orderDate);
  deliveredDate.setDate(deliveredDate?.getDate() + 7);
  //   console.log(deliveredDate);
  const date = deliveredDate?.toDateString();
  //   console.log(date);
  const orderItem = order?.orderItems;
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">
          <span className="text-[#3BB77E]">Congrats!</span> Successfully Paid.
        </h2>
        <h2 className="text-3xl py-2">Your Order Summary</h2>
        <div className="lg:px-10 md:px-10 text-xl space-y-1 py-5">
          <div className="md:flex lg:flex justify-between">
            <h1>Name: {order?.name}</h1>
            <h1>transactionId: {transactionId}</h1>
          </div>
          <div className="md:flex lg:flex justify-between">
            <h1>
              Address: {order.address} {order?.city} {order?.country}
            </h1>
            <h1>Delivery Date: {date} </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderItem?.map((order) => (
              <tr key={order?.id} order={order}>
                <td>
                  <div className="flex items-center space-x-3 ">
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

                <td>{order?.quantity}</td>
                <td className="text-2xl pt-10 lg:pt-0">
                  ${order?.subtotal?.toFixed(2)}
                </td>
                <th>
                  <button
                    disabled
                    className=" px-3 py-2 bg-[#DEF9EC] text-[#3BB77E] rounded flex hover:text-white hover:bg-[#3BB77E] text-[14px] font-bold"
                  >
                    Paid
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="flex justify-end py-5">
          <div className="pr-10 text-3xl space-y-1">
            <h1>Total paid: ${order?.total}</h1>
            <h1>Due: 0.00</h1>
          </div>
        </div>

        <button
          className=" px-3 py-2 rounded flex text-white bg-[#3BB77E] text-[14px] font-bold print:hidden ml-auto mt-5 mr-10"
          onClick={() => window.print("Nest Mart & Grocery Bill")}
        >
          Print
        </button>
      </div>
      <h1 className="text-[#3BB77E] print:block hidden text-4xl">
        Happy Shopping !!
      </h1>
      <p className=" print:block hidden">Team Nest Mart & Grocery</p>
    </div>
  );
};

export default PaymentSuccess;
