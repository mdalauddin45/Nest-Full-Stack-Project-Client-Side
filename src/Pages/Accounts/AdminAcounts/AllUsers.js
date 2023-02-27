import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { deleteUser } from "../../../api/User";

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://nest-mauve.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [loading]);
  // console.log(users);
  const sellers = users.filter((x) => x.role === "host");
  // console.log(sellers);
  const handleDelet = (id) => {
    if (id) {
      deleteUser(id);
      toast.success("delet user Succussfuly");
      setLoading(!loading);
    }
  };
  return (
    <>
      {sellers && Array.isArray(sellers) && sellers.length > 0 ? (
        <>
          <div className="container mx-auto px-10 py-5 sm:px-8 ">
            <div className="text-center">
              <h1 className="text-3xl text-black font-bold">
                All Seller Information
              </h1>
            </div>
            <div className="py-8 lg:px-10 md:px-10">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sellers &&
                        sellers.map((user, i) => (
                          <tr key={i}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user.email}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user?.role ? user.role : "User"}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span
                                onClick={() => handleDelet(user._id)}
                                className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                ></span>
                                <button className="relative">Delete</button>
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" text-gray-600 gap-5 flex flex-col justify-center items-center py-16 text-xl lg:text-3xl px-10">
            There's no Seller data available right now.
          </div>
        </>
      )}
    </>
  );
};

export default AllUsers;
