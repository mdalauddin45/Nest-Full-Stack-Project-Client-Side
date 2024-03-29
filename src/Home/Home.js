import React from "react";
import Banner from "../Pages/Banner/Banner";
import BestSells from "../Pages/BestSells/BestSells";
import Categoris from "../Pages/Category/Categoris";
import CategoryBanners from "../Pages/CategoryBanner/CategoryBanners";
import Products from "../Pages/Products/Products";
import FooterSection from "../Pages/Shared/FooterSection";
// import Slide from "../Pages/Slide/Slide";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Slide /> */}
      <Categoris />
      <CategoryBanners />
      <Products />
      <BestSells />
      <FooterSection />
    </div>
  );
};

export default Home;
