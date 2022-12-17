import React from "react";

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold font-serif">Your Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border rounded-lg">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Completed</td>
              <td>Blue</td>
              <td>View</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Cy Ganderton</td>
              <td>Completed</td>
              <td>Blue</td>
              <td>View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
