import React from "react";
import loader from "../../assets/loading.gif";

function Spinner() {
  return (
    <div>
      <img src={loader} className="mx-[50%] my-[20%]" alt="" />
    </div>
  );
}

export default Spinner;
