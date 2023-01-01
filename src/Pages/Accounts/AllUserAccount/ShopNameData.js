import React from "react";
import { useLoaderData } from "react-router";
import Product from "../../Products/Product";
import ShopProfile from "./ShopProfile";

const ShopNameData = () => {
  const products = useLoaderData();
  const email = products[0].email;
  console.log(email);
  return (
    <div>
      <div>
        <ShopProfile email={email}></ShopProfile>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-6 py-10">
        {products?.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default ShopNameData;
