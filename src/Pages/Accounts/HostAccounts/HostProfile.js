import { MapPinIcon, PhoneIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import twitter from "../../../assets/Shop/social-tw.svg";
import facebook from "../../../assets/Shop/social-fb.svg";
import insta from "../../../assets/Shop/social-insta.svg";
import ping from "../../../assets/Shop/social-pin.svg";
import { Link } from "react-router-dom";
import HostProfileUpdateModal from "./HostProfileUpdateModal";
import { imageUpload } from "../../../api/ImageUpload";
import { getUser } from "../../../api/auth";
import { toast } from "react-hot-toast";
import { updateShop } from "../../../api/services";

const HostProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  const fetchProfile = () =>
    getUser(user?.email).then((data) => {
      setProfile(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProfile();
  }, [user, loading]);

  const handelUpdateProfile = (event) => {
    event.preventDefault();
    const shopname = event.target.shopname.value;
    const since = event.target.since.value;
    const description = event.target.description.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const twitter = event.target.twitter.value;
    const facebook = event.target.facebook.value;
    const instagram = event.target.instagram.value;
    const pinterest = event.target.pinterest.value;
    // Image Upload
    const shopimage = event.target.image.files[0];
    imageUpload(shopimage)
      .then((res) => {
        const UpdateShop = {
          shopname,
          since,
          address,
          phone,
          twitter,
          facebook,
          instagram,
          twitter,
          pinterest,
          shopimage: res.data.display_url,
          email: user?.email,
          description,
        };
        console.log(UpdateShop);
        updateShop(UpdateShop).then((data) => {
          console.log(data);
        });

        fetch(`http://localhost:5000/user/${user?.email}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UpdateShop),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoading(false);
            toast.success("Update Successfuly !");
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className=" md:max-w-xs lg:max-w-xs px-10 md:px-0 lg:px-0">
      <div className="flex flex-col justify-center lg:px-4 md:px-4 px-10 py-6 shadow-md rounded-xl  text-gray-900 bg-[#d1e8f2]">
        <img
          src={profile?.shopimage ? profile?.shopimage : user?.photoURL}
          alt=""
          className="w-32 h-32 "
        />
        <div className="space-y-4  divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <p className="text-[14px]">
              Since {profile?.since ? profile?.since : "2022"}
            </p>
            <h2 className="text-xl font-semibold text-[24px] space-y-1">
              {profile?.shopname ? profile?.shopname : user?.displayName}
            </h2>
            <div className="flex text-yellow-400 text-[14px] ">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <p className="text-[#253D4E] ml-2"> 4.0</p>
            </div>
            <p className="space-y-1 text-[14px]">
              {profile.description ? profile.description : "description...."}
            </p>
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
              <MapPinIcon className="h-10 w-10 text-[#3BB77E]" />
              <p className="px-1">
                Address: {profile?.address ? profile?.address : "Bangladesh"}
              </p>
            </div>
            <div className="flex space-y-1">
              <PhoneIcon className="h-5 w-5  text-[#3BB77E]" />
              <p className="px-1">
                Call Us: {profile.phone ? profile.phone : "0123456789"}
              </p>
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
      <HostProfileUpdateModal handelUpdateProfile={handelUpdateProfile} />
    </div>
  );
};

export default HostProfile;
