import React from "react";
import { Link } from "react-router-dom";
import Error from "../../assets/Account/page-404.png";
const ErrorPage = () => {
  return (
    <div className="text-center px-10 py-20">
      <div className="flex justify-center">
        <img src={Error} alt="" />
      </div>
      <h1 className="text-6xl py-5">Page Not Found</h1>
      <h1 className="text-2xl lg:px-20">
        The link you clicked may be broken or the page may have been removed.
        visit the{" "}
        <Link to="/" className="text-[#3BB77E]">
          Homepage
        </Link>{" "}
        or <span className="text-[#3BB77E]">Contact us</span> about the problem
      </h1>
    </div>
  );
};

export default ErrorPage;
