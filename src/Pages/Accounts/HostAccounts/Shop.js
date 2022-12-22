import React from "react";
import HostProducts from "./HostProducts";
import HostProfile from "./HostProfile";

function Shop() {
  return (
    <div className=" px-5 py-5">
      <div className="lg:pl-[50%] md:pl-[30%]">
        <HostProfile />
      </div>
      <div className="px-2">
        <HostProducts />
      </div>
    </div>
  );
}

export default Shop;
