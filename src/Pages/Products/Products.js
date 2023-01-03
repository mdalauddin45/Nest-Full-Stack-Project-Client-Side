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

  // get only all categoryname
  const allCategory = products?.map((product) => product.category);
  // console.log(allCategory);
  // get only unique categoryname
  const uniqueCategory = [...new Set(allCategory)];
  // console.log(uniqueCategory);

  return (
    <div>
      <div className="flex justify-between px-10 lg:px-6 pt-10">
        <div>
          <h1 className="text-[32px]">Popular Products</h1>
        </div>
        <div>
          <ul className="flex gap-4 text-[16px] text-[#253D4E]">
            <li>
              <Link to="/products">All</Link>
            </li>
            {uniqueCategory?.map((category, uxi) => (
              <li key={uxi}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-6 py-10">
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
