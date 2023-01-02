import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";
import HostProductsCard from "./HostProductsCard";

const HostProducts = () => {
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
  //   console.log(products);
  return (
    <div>
      <div className="flex justify-between p-10 lg:p-0 lg:pb-10 lg:px-5">
        <h1 className="text-[16px] text-[#7E7E7E]">
          We found{" "}
          <span className="text-[#3BB77E]">
            {products?.length ? products.length : "0"}
          </span>{" "}
          items for you!
        </h1>
        <label
          htmlFor="update-modal"
          className="px-3 py-2 text-white bg-[#3BB77E] text-[12px]"
        >
          Update
        </label>
      </div>
      {products && Array.isArray(products) && products.length > 0 ? (
        <div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:px-3 md:px-3  px-10">
            {products?.map((product) => (
              <HostProductsCard
                product={product}
                key={product?._id}
                loading={loading}
                setLoading={setLoading}
              ></HostProductsCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-3xl py-5 ">
          <h1>
            You have no products .Please
            <Link to="/account/addproduct" className="text-[#3BB77E]">
              Add products .
            </Link>
          </h1>
          <img
            src="https://i.ibb.co/932sxVn/O1-CN01-Cb-ATt-G1mya-DFca-PFt-6000000005023-2-tps-1173-790.png"
            alt=".."
          />
        </div>
      )}
    </div>
  );
};

export default HostProducts;
