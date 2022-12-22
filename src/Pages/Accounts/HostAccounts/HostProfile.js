import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";

const HostProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = () =>
    getProducts(user?.email).then((data) => {
      setProducts(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user, loading]);
  // console.log(products);

  //   console.log(user);
  return (
    <div className="w-96">
      <div className="flex flex-col justify-center max-w-xs px-6 py-6 shadow-md rounded-xl sm:px-12 text-gray-900">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              Products: {products?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;
