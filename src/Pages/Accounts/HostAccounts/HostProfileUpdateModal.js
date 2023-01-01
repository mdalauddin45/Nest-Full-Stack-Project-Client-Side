import React from "react";
import { useContext } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const HostProfileUpdateModal = ({ handelUpdateProfile }) => {
  const { loading } = useContext(AuthContext);

  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white  w-10/12 max-w-5xl">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handelUpdateProfile}
            className="space-y-1 ng-untouched ng-pristine ng-valid "
          >
            <div className="text-center">
              <h1 className="text-xl"> Update Your Shop!</h1>
            </div>

            <div className="space-y-3 text-sm ">
              <label className="block text-sm">Shop Name</label>
              <input
                type="text"
                name="shopname"
                placeholder="Enter Your Shop Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Since</label>
              <input
                type="text"
                name="since"
                placeholder="Enter Since Year"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter Your Shop Description"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="space-y-3 text-sm w-full mr-10">
                <label className="block text-sm">Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  placeholder="Enter Your twitter link"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                />
              </div>
              <div className="space-y-3 text-sm w-full">
                <label className="block text-sm">Facebook</label>
                <input
                  type="text"
                  name="facebook"
                  placeholder="Enter Your facebook link"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="space-y-3 text-sm w-full mr-10">
                <label className="block text-sm">Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="Enter Your instagram link"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                />
              </div>
              <div className="space-y-3 text-sm w-full">
                <label className="block text-sm">Pinterest</label>
                <input
                  type="text"
                  name="pinterest"
                  placeholder="Enter Your pinterest link"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                />
              </div>
            </div>

            <div className="py-2 w-full">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="file-input  file-input-success w-full "
              />
            </div>
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-5 font-semibold rounded-lg text-white bg-[#3BB77E] "
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
