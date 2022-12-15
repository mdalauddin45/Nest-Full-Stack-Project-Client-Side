import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import PrimaryButton from "../Button/PrimaryButton";
import AdminMenu from "./AdminMenu";
import HostMenu from "./HostMenu";
import UserMenu from "./UserMenus";

const Menubar = ({ role }) => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {role && role !== "requested" ? (
            <>{role === "admin" ? <AdminMenu /> : <HostMenu />} </>
          ) : (
            <UserMenu />
          )}
        </nav>
      </div>

      <div>
        <hr />
        <PrimaryButton
          handler={logout}
          classes="flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />

          <span className="mx-4 font-medium">Logout</span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Menubar;
