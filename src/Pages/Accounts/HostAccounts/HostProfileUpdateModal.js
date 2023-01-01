import React from "react";
import { useContext } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const HostProfileUpdateModal = ({ handelUpdateProfile }) => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handelUpdateProfile}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-3 text-sm ">
              <label className="block text-sm">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                defaultValue={user?.displayName}
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Email</label>
              <input
                disabled
                defaultValue={user?.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">University</label>
              <input
                type="text"
                name="university"
                placeholder="University Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Address</label>
              <textarea
                type="text"
                name="address"
                placeholder="Enter Your Addres Address"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="file-input  file-input-success w-full max-w-xs"
              />
            </div>
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-5 font-semibold rounded-lg "
              >
                {loading ? <SmallSpinner /> : "Submit & Update"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostProfileUpdateModal;
