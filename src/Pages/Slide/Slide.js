import React from "react";
import slide1 from "../../assets/Slide/slider-1.png";
import slide2 from "../../assets/Slide/slider-2.png";

const Slide = () => {
  return (
    <div className="px-3">
      <div className="carousel w-full rounded-lg  my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 lg:top-1/4 px-5">
            <h1 className="text-xl lg:text-6xl font-bold text-[#253D4E]">
              Don’t miss amazing
            </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-20 lg:top-2/4 px-5">
            <h1 className="text-xl lg:text-6xl font-bold text-[#253D4E]">
              grocery deals
            </h1>
          </div>

          <div className="absolute flex  py-14 px-5 lg:left-24 lg:top-[210px]">
            <p className="text-sm lg:text-2xl text-[#253D4E]">
              Sign up for the daily newsletter
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24  top-28 lg:top-3/4 px-5">
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input  w-full pr-16"
              />
              <button className="btn bg-[#3BB77E] border-none absolute top-0  right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
