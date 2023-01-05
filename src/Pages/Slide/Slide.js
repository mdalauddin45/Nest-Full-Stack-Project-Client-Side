import { CircleStackIcon } from "@heroicons/react/24/solid";
import React from "react";
import { AiFillCiCircle } from "react-icons/ai";
import slide1 from "../../assets/Slide/slider-1.png";
import slide2 from "../../assets/Slide/slider-2.png";

const Slide = () => {
  return (
    <div className="px-3">
      <div className="carousel w-full rounded-lg h-[370px] md:h-[467px] lg:h-[538px]  my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} alt="/" className="transform" />
          {/* <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 top-1/4 px-5">
            <div className="ml-10 mt-16  lg:mt-32 md:mt-32 space-y-3 lg:ml-0 ">
              <h1 className=" text-[46px]  font-semibold text-[#253D4E]">
                Don’t miss amazing <br />
                grocery deals
              </h1>

              <h1 className="lg:text-[30px] text-[22px] text-[#7E7E7E]">
                Sign up for the daily newsletter
              </h1>
              <div className="relative lg:w-full w-60 ">
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
          </div> */}
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 top-1/4 px-5">
            <div className="ml-10 mt-32 space-y-3 lg:ml-0 ">
              <h1 className="md:hidden lg:hidden text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Don’t miss <br /> amazing <br />
                grocery deals
              </h1>
              <h1 className="hidden md:block lg:block text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Fresh Vegetables <br /> Big discount
              </h1>
              <h1 className="lg:text-[30px] text-[22px] text-[#7E7E7E]">
                Save up to 50% off on your first order
              </h1>
              <div className="relative lg:w-full w-60 ">
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
          </div>

          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 -bottom-8">
            <a
              href="#slide4"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <input
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
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
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 top-1/4 px-5">
            <div className="ml-10 mt-32 space-y-3 lg:ml-0 ">
              <h1 className="md:hidden lg:hidden text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Don’t miss <br /> amazing <br />
                grocery deals
              </h1>
              <h1 className="hidden md:block lg:block text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Fresh Vegetables <br /> Big discount
              </h1>
              <h1 className="lg:text-[30px] text-[22px] text-[#7E7E7E]">
                Save up to 50% off on your first order
              </h1>
              <div className="relative lg:w-full w-60 ">
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
          </div>
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
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 -bottom-8">
            <a
              href="#slide4"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <input
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide1} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 top-1/4 px-5">
            <div className="ml-10 mt-32 space-y-3 lg:ml-0 ">
              <h1 className="md:hidden lg:hidden text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Don’t miss <br /> amazing <br />
                grocery deals
              </h1>
              <h1 className="hidden md:block lg:block text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Don’t miss amazing <br /> grocery deals
              </h1>
              <h1 className="lg:text-[30px] text-[22px] text-[#7E7E7E]">
                Sign up for the daily newsletter
              </h1>
              <div className="relative lg:w-full w-60 ">
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
          </div>
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
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 -bottom-8">
            <a
              href="#slide4"
              className="btn btn-circle  btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <input
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline hover:bg-[#3BB77E] border-none text-[#7E7E7E] hover:text-white"
            >
              <p
                type="radio"
                name="radio-5"
                className="radio w-4 h-4 radio-success"
                checked
              />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 top-1/4 px-5">
            <div className="ml-10 mt-32 space-y-3 lg:ml-0 ">
              <h1 className="md:hidden lg:hidden text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Don’t miss <br /> amazing <br />
                grocery deals
              </h1>
              <h1 className="hidden md:block lg:block text-[46px] lg:text-6xl font-semibold text-[#253D4E]">
                Fresh Vegetables <br /> Big discount
              </h1>
              <h1 className="lg:text-[30px] text-[22px] text-[#7E7E7E]">
                Save up to 50% off on your first order
              </h1>
              <div className="relative lg:w-full w-60 ">
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
          </div>
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
