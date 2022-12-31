import React from "react";
import HostProducts from "./HostProducts";
import HostProfile from "./HostProfile";

function Shop() {
  return (
    <div className="lg:flex md:flex block px-5 py-5">
      <div>
        <HostProfile />
      </div>
      <div className="px-2">
        <HostProducts />
      </div>
    </div>
  );
}

export default Shop;
