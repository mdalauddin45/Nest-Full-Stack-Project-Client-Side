import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.displayName);
  return (
    <div className="md:pt-20 pt-10 lg:pt-0">
      <p className="font-bold  text-3xl pl-5">Hello {user?.displayName}</p>
      <br />
      <p className="pl-5">
        From your account dashboard. you can easily check & view your
        <Link to="/account/orders" className="text-[#3BB77E] pl-5">
          recent orders
        </Link>
        , <br /> manage your shipping and billing addresses and edit your
        password and account details.
      </p>
    </div>
  );
};

export default UserDashboard;
