import React, { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      // fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-6 py-10">
      {products?.map((product) => (
        <Product product={product} key={product._id}></Product>
      ))}
    </div>
  );
};

export default AllProducts;
