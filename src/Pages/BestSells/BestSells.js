import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Product from "../Products/Product";
import { motion } from "framer-motion";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import SellImage from "../../assets/Banar/banner-4.png";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
const BestSells = () => {
  const [bestSells, setBestSells] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setBestSells(data));
  }, []);
  //   console.log(bestSells);
  return (
    <motion.div
      animate={{
        x: 0,
        y: -150,
        scale: 1,
        rotate: 0,
        transition: { duration: 4 },
      }}
    >
      <div className=" mb-4 sm:mb-10 ">
        <div className="my-3">
          <h1 className=" font-bold text-xl sm:text-2xl text-[#253D4E] px-10">
            Daily Best Sells
          </h1>
        </div>
        <div className="lg:flex">
          <div className="w-1/6 hidden lg:block">
            <img className="h-96  rounded-lg absolute" src={SellImage} alt="" />
            <div className="flex justify-center pt-[50%]">
              <Link
                to={"/products"}
                className="px-3 py-2 relative  rounded  text-white bg-[#3BB77E] text-[14px] flex "
              >
                Shop Now <ArrowRightIcon className="h-6 w-6 text-white pl-2" />
              </Link>
            </div>
          </div>
          <div className="lg:w-5/6 px-10 ">
            <Splide
              className=" "
              aria-label=""
              options={{
                speed: "2000",
                autoplay: true,
                gap: "1rem",
                perPage: 4,
                breakpoints: {
                  1280: {
                    perPage: 4,
                  },
                  1024: {
                    perPage: 3,
                  },
                  768: {
                    perPage: 2,
                  },
                },
                arrows: true,
                pagination: false,
                perMove: 2,
              }}
            >
              {bestSells?.map((product) => (
                <SplideSlide
                  className="py-1"
                  product={product}
                  key={product._id}
                >
                  <Product product={product} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BestSells;
