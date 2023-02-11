import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Banner = () => {
  const [bannerImg, setBannerImg] = React.useState([]);
  useEffect(() => {
    // fetch("mainBanner.json")
    fetch("Banner.json")
      .then((res) => res.json())
      .then((data) => setBannerImg(data));
  }, []);
  //   console.log(bannerImg);
  return (
    <div className=" ">
      <Splide
        aria-label=""
        options={{
          autoplay: true,
          height: "50vh",

          breakpoints: {
            1500: {
              height: "50vh",
            },
            1024: {
              height: "40vh",
            },
          },
          rewind: true,
          arrows: true,
          pagination: true,
          speed: "2000",
        }}
      >
        {bannerImg?.map((banner, uxi) => (
          <SplideSlide key={uxi} className="relative ">
            <div className="w-full my-10">
              <img
                className=" w-full carousel-item relative transform rounded-lg h-[370px] md:h-[467px] lg:h-[538px]"
                src={banner?.image}
                alt=""
              />
              <div
                className=" absolute bottom-16
               md:bottom-36  px-16  "
              >
                <div className="">
                  <h3 className="text-[40px] lg:text-6xl  font-semibold text-[#253D4E] ">
                    {banner?.title}
                  </h3>
                  <h2 className="lg:text-[30px] text-[22px] text-[#7E7E7E] pb-2 lg:py-5">
                    {banner?.name}
                  </h2>
                  <div className="relative lg:w-96 w-60 ">
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
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Banner;
