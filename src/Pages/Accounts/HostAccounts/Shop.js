import React from "react";
import HostProducts from "./HostProducts";
import HostProfile from "./HostProfile";

function Shop() {
  return (
    <div className="lg:flex md:flex block  py-5">
      <div>
        <HostProfile />
      </div>
      <div>
        <HostProducts />
      </div>
    </div>
  );
}

export default Shop;
