import React from "react";
import loader from "../../assets/loading.gif";

function Spinner() {
  return (
    <div>
      <img
        src={loader}
        className="mx-[45%] lg:my-[20%] my-[60%] md:my-[40%]"
        alt=""
      />
    </div>
  );
}

export default Spinner;
