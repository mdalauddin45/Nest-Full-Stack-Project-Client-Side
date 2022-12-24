import React from "react";
import CategoryBanners from "../Pages/CategoryBanner/CategoryBanners";
import Products from "../Pages/Products/Products";
import FooterSection from "../Pages/Shared/FooterSection";
import Supports from "../Pages/Shared/Supports";
import Slide from "../Pages/Slide/Slide";

const Home = () => {
  return (
    <div>
      <Slide />
      <CategoryBanners />
      <Products />
      <FooterSection />
      <Supports />
    </div>
  );
};

export default Home;
