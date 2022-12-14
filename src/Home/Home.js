import React from "react";
import Categoris from "../Pages/Category/Categoris";
import CategoryBanners from "../Pages/CategoryBanner/CategoryBanners";
import Products from "../Pages/Products/Products";
import FooterSection from "../Pages/Shared/FooterSection";
import Slide from "../Pages/Slide/Slide";
// import Slider from "../Pages/Slide/Slider";

const Home = () => {
  return (
    <div>
      <Slide />
      <Categoris />
      <CategoryBanners />
      <Products />
      <FooterSection />
    </div>
  );
};

export default Home;
