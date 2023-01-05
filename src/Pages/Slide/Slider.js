import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
  "/images/slider-1.png",
  "/images/slider-2.png",
  //   "/images/slider-3.png",
  //   "/images/slider-4.png",
  //   "/images/slider-7.png",
  //   "/images/slider-8.png",
  //   "/assets/Slide/slider-1.png",
  //   "/assets/Slide/slider-2.png",
  //   "/assets/Slide/slider-1.png",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>
      <div className="absolute w-full top-1/2 transform px-3 ">
        <h1>hlw</h1>
        <p>hlow</p>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className=" cursor-pointer  transition"
          onClick={handleOnPrevClick}
        >
          <a
            href="#slide1"
            className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
          >
            ❮
          </a>
        </button>
        <button
          className=" cursor-pointer  transition"
          onClick={handleOnNextClick}
        >
          <a
            href="#slide3"
            className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
          >
            ❯
          </a>
        </button>
      </div>
    </div>
  );
}
