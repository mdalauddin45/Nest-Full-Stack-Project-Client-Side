import React from "react";
import HostProducts from "./HostProducts";
import HostProfile from "./HostProfile";
import HostProfileUpdateModal from "./HostProfileUpdateModal";

function Shop() {
  const handelUpdateProfile = (id) => {
    console.log(id);
  };
  return (
    <div className="lg:flex md:flex block  py-5">
      <div>
        <HostProfile handelUpdateProfile={handelUpdateProfile} />
        <HostProfileUpdateModal />
      </div>
      <div>
        <HostProducts handelUpdateProfile={handelUpdateProfile} />
      </div>
    </div>
  );
}

export default Shop;
