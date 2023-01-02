import React from "react";
import banner1 from "../../assets/Banar/banner-1.png";
import banner2 from "../../assets/Banar/banner-2.png";
import banner3 from "../../assets/Banar/banner-3.png";
import Banner from "./Banner";
const CategoryBanners = () => {
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Everyday Fresh & Clean with Our Products",
    },
    {
      id: 2,
      image: banner2,
      title: "Make your Breakfast Healthy and Easy",
    },
    {
      id: 3,
      image: banner3,
      title: "The best Organic Products Online",
    },
  ];
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-6">
      {banners.map((banner) => (
        <Banner banner={banner} key={banner.id}></Banner>
      ))}
    </div>
  );
};

export default CategoryBanners;
