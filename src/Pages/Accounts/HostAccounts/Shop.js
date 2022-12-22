import React from "react";
import HostProfile from "./HostProfile";

function Shop() {
  return (
    <div className="lg:flex md:flex px-5 py-5">
      <HostProfile />
      <div className="px-2">
        <h1>Your Total Products</h1>
      </div>
    </div>
  );
}

export default Shop;
