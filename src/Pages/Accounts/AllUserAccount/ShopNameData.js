import React from "react";
import { useLoaderData, useLocation } from "react-router";
import Product from "../../Products/Product";
import FooterSection from "../../Shared/FooterSection";
import ShopProfile from "./ShopProfile";

const ShopNameData = () => {
  const products = useLoaderData();
  // const email = products[0].email;
  // console.log(email);
  const location = useLocation();
  const shopname = location.pathname.split("/")[2];
  console.log(shopname);
  return (
    <div>
      <div className="lg:flex md:flex">
        <div className="lg:w-96 md:w-96 md:pl-3">
          <ShopProfile shopname={shopname}></ShopProfile>
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-6 py-10 lg:py-0 md:py-0">
          {products?.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ShopNameData;
