import React, { useEffect, useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://nest-server-side.vercel.app/products")
      // fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="py-24">
      <motion.div
        animate={{
          x: 0,
          y: -100,
          scale: 1,
          rotate: 0,
          transition: { duration: 4 },
        }}
        className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-6 py-10"
      >
        {products?.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </motion.div>
    </div>
  );
};

export default AllProducts;
