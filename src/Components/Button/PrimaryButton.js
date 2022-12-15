import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:bg-[#3BB77E] hover:text-white  text-gary-300 ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
