import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Products/banner-10.png";
import img2 from "../../assets/Products/banner-9.png";

const FooterSection = () => {
  return (
    <div>
      <section
        className="mt-20 rounded-xl"
        style={{
          background: `url(${img1})`,
        }}
      >
        <div className="">
          <div className=" flex-col ">
            <div className="px-16 pt-20">
              <h1 className=" text-[#253D4E] text-[40px] font-bold">
                Stay home & get your daily needs from our shop
              </h1>
              <h1 className="text-xl  pt-2">
                Start You'r Daily Shopping with{" "}
                <Link to="/products" className="text-[#3BB77E]">
                  BD Food
                </Link>
              </h1>
              <div className="pt-5">
                <div className="relative w-72">
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
            <div className="flex justify-end pr-5">
              <img src={img2} alt="." className="lg:w-1/2  " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
