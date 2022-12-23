import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      // fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  //   console.log(products);
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-6 py-10">
        {products?.slice(0, 10)?.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <div className="text-center">
        {products?.length > 10 && (
          <Link
            to="/products"
            className="bg-[#3BB77E] text-white px-4 py-2 rounded-lg font-bold"
          >
            Load More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Products;
