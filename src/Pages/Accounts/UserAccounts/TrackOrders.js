import React, { useContext } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const TrackOrders = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <div className="pl-10">
        <h1 className="text-3xl font-bold ">Orders tracking</h1>
        <p className="py-5 text-[#7E7E7E]">
          To track your order please enter your OrderID in the box below and
          press "Track" button. This was given to you on your receipt and in the
          confirmation email you should have received.
        </p>
      </div>
      <div>
        <div className="flex flex-col max-w-md  rounded-md sm:p-10  text-gray-900">
          <form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm text-[#7E7E7E]"
                >
                  Order ID
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="Enter Order Id Here"
                  className="w-full px-4 py-5 border rounded-md  focus:outline-green-500  text-gray-900 "
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className="text-sm mb-2 text-[#7E7E7E]"
                  >
                    Billing Email
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Billing Email Here"
                  className="w-full px-4 py-5 border rounded-md focus:outline-green-500  text-gray-900"
                />
              </div>
            </div>

            <div>
              <PrimaryButton
                type="submit"
                classes=" px-8 py-3 font-semibold rounded-md bg-[#3BB77E] text-white"
              >
                {loading ? <SmallSpinner /> : "Track"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrackOrders;
