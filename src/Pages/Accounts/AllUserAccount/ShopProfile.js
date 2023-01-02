import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../../api/auth";
import twitter from "../../../assets/Shop/social-tw.svg";
import facebook from "../../../assets/Shop/social-fb.svg";
import insta from "../../../assets/Shop/social-insta.svg";
import ping from "../../../assets/Shop/social-pin.svg";
import { getShop } from "../../../api/services";

const ShopProfile = ({ shopname }) => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProfile = () =>
    getShop(shopname).then((data) => {
      setProfile(...data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProfile();
  }, [shopname]);
  console.log(profile);
  return (
    <div className=" md:max-w-xs lg:max-w-xs px-10 md:px-0 lg:px-0">
      <div className="flex flex-col justify-center lg:px-4 md:px-4 px-10 py-6 shadow-md rounded-xl  text-gray-900 bg-[#d1e8f2]">
        <img src={profile?.shopimage} alt="" className="w-32 h-32 " />
        <div className="space-y-4  divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <p className="text-[14px]">Since {profile?.since}</p>
            <h2 className="text-xl font-semibold text-[24px] space-y-1">
              {profile?.shopname}
            </h2>
            <div className="flex text-yellow-400 text-[14px] ">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <p className="text-[#253D4E] ml-2"> 4.0</p>
            </div>
            <p className="space-y-1 text-[14px]">{profile?.description}</p>
            <p className="space-y-1 text-[16px]font-bold">Follow Us</p>
            <div className="flex space-y-1">
              <a href={profile?.twitter}>
                <img src={twitter} className="px-1" alt="" />
              </a>
              <a href={profile?.facebook}>
                <img src={facebook} className="px-1" alt="" />
              </a>
              <a href={profile?.instagram}>
                <img src={insta} className="px-1" alt="" />
              </a>
              <a href={profile?.pinterest}>
                <img src={ping} className="px-1" alt="" />
              </a>
            </div>
            <div className="flex space-y-1">
              <MapPinIcon className="h-7 w-7 text-[#3BB77E]" />
              <p className="px-1">Address: {profile?.address}</p>
            </div>
            <div className="flex space-y-1">
              <EnvelopeIcon className="h-6 w-6 text-[#3BB77E]" />
              <p className="px-1">Email: {profile?.email}</p>
            </div>
            <div className="flex space-y-1">
              <PhoneIcon className="h-5 w-5  text-[#3BB77E]" />
              <p className="px-1">Call Us: {profile?.phone}</p>
            </div>
            <div>
              <Link>
                <button className="bg-[#3BB77E] text-white mt-2 px-4 py-2 rounded-sm font-bold">
                  Contact Seller
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
