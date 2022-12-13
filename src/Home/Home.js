import React from "react";
import CategoryBanners from "../Pages/CategoryBanner/CategoryBanners";
import Products from "../Pages/Products/Products";
import Slide from "../Pages/Slide/Slide";

const Home = () => {
  return (
    <div>
      <Slide />
      <CategoryBanners />
      <Products />
    </div>
  );
};

export default Home;
