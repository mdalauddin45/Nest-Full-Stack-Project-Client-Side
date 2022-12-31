import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteWishlit, getWishlist } from "../../../api/services";
import { AuthContext } from "../../../contexts/AuthProvider";
import FooterSection from "../../Shared/FooterSection";
import WishListRow from "./WishListRow";

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
  console.log(wishlist);
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
      <FooterSection />
    </div>
  );
};

export default WishList;
