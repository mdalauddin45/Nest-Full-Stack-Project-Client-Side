import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Product from "../../Products/Product";
import categoryImage from "../../../assets/Shop/header-bg.png";

const CategoryData = () => {
  const products = useLoaderData();
  //   console.log(products);
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  //   console.log(categoryName);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          background: `url(${categoryImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          marginTop: "10px",
        }}
        className=" p-10"
      >
        <h1 className="text-5xl text-white py-20">{categoryName}</h1>
      </div>
      <h1 className="py-5 text-3xl">
        We found <span className="text-[#3BB77E]">{products?.length}</span>{" "}
        items for you!
      </h1>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-0 ">
        {products?.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
