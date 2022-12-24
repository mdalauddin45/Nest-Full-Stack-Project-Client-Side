import React from "react";
import img1 from "../../assets/Contact/icon-1.svg";
import img2 from "../../assets/Contact/icon-2.svg";
import img3 from "../../assets/Contact/icon-3.svg";
import img4 from "../../assets/Contact/icon-4.svg";
import img5 from "../../assets/Contact/icon-5.svg";
import img6 from "../../assets/Contact/icon-6.svg";
import Support from "./Support";
const Supports = () => {
  const supportData = [
    {
      id: 1,
      image: img1,
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      id: 2,
      image: img2,
      title: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      id: 3,
      image: img3,
      title: "Great daily deal",
      description: "When you sign up",
    },
    {
      id: 4,
      image: img4,
      title: "Wide assortment",
      description: "Mega Discounts",
    },
    {
      id: 5,
      image: img5,
      title: "Easy returns",
      description: "Within 30 days",
    },
    {
      id: 6,
      image: img6,
      title: "Safe delivery",
      description: "Within 30 days",
    },
  ];
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 lg:px-6 py-10">
      {supportData.map((Supporrt) => (
        <Support key={Supporrt.id} Supporrt={Supporrt}></Support>
      ))}
    </div>
  );
};

export default Supports;
