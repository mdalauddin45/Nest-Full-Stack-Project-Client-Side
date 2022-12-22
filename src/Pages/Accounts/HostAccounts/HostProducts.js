import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";

const HostProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const fetchProducts = () =>
    getProducts(user?.email).then((data) => setProducts(data));

  useEffect(() => {
    fetchProducts();
  }, [user]);

  console.log(products);
  return (
    <div>
      <h1>this is HostProducts</h1>
    </div>
  );
};

export default HostProducts;
