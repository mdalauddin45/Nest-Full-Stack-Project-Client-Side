import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteWishlit, getWishlist } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";
import FooterSection from "../../Shared/FooterSection";
import WishListRow from "./WishListRow";
import empty from "../../../assets//Banar/Empty.png";
import { Link } from "react-router-dom";
import cartImage from "../../../assets/Banar/single-banner.jpg";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const fetchProducts = () =>
    getWishlist(user?.email).then((data) => {
      setWishlist(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user, loading]);
  const handleDelete = (id) => {
    // console.log(id);
    deleteWishlit(id);
    if (id) {
      toast.success("Remove wishlist  Successfully");
    }
    setLoading(!loading);
  };

  return (
    <div>
      {wishlist.length > 0 ? (
        <>
          <h1 className="text-5xl  px-5 pt-3">Your Wishlist</h1>
          <h1 className="text-2xl px-5 pb-3 pt-1">
            There are {wishlist?.length} products in this list
          </h1>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock Status</th>
                  <th>Action</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlist &&
                  wishlist?.map((order) => (
                    <WishListRow
                      order={order}
                      key={order._id}
                      handleDelete={handleDelete}
                    ></WishListRow>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center items-center">
          <div
            style={{
              width: "100%",
              height: "300px",
              position: "relative",
              background: `url(${cartImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.8",
            }}
          >
            <h1 className="text-5xl text-white">Cart</h1>
          </div>
          <div className="flex justify-center">
            <img src={empty} alt="" />
          </div>
          <div className="text-2xl pb-10">
            <h1>Uh-oh! Your Cart appears to be empty!</h1>
            <h1>Try Purbliss soap today!</h1>
          </div>
          <Link
            to="/products"
            className="hover:bg-[#3BB77E] hover:text-white  text-gary-300 w-full px-8 py-3 font-semibold rounded-md bg-[#3BB77E] text-white"
          >
            Shop Now
          </Link>
        </div>
      )}
      <FooterSection />
    </div>
  );
};

export default WishList;
