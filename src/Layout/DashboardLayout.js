import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getRole } from "../api/User";
import Menubar from "../components/Dashboard/Menubar";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  console.log(role);
  return (
    <div className="relative min-h-screen md:flex lg:flex justify-between lg:px-32 lg:py-20 px-10 py-5">
      <Menubar role={role}></Menubar>
      <div className="lg:my-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
