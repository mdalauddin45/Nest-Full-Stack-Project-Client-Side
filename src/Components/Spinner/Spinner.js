import React from "react";
import loader from "../../assets/loading.gif";

function Spinner() {
  return (
    <div>
      <img src={loader} alt="" />
    </div>
  );
}

export default Spinner;
