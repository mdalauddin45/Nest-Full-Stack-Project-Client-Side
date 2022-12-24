import React from "react";

const Support = ({ Supporrt }) => {
  console.log(Supporrt);
  const { image, title, description } = Supporrt;
  return (
    <div className="card card-side bg-[#F4F6FA] rounded-xl pl-3">
      <figure>
        <img src={image} alt="Movie" className="w-14 h-14" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#242424] text-[18px]">{title}</h2>
        <h2 className="text-[#adadad] text-[16px]">{description}</h2>
      </div>
    </div>
  );
};

export default Support;
