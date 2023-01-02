import React, { useContext, useEffect, useState } from "react";
import { getCheckout } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";

const CheckOut = () => {
  const [orders, getOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const fetchProducts = () =>
    getCheckout(user?.email).then((data) => {
      getOrders(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user]);
  console.log(orders);
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default CheckOut;
