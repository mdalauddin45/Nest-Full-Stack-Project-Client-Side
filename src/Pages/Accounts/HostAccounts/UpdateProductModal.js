import React from "react";
import { toast } from "react-hot-toast";
import { updateProduct } from "../../../api/services";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";

const UpdateProductModal = ({ loading, product }) => {
  //   console.log(products);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.productname.value;
    const category = from.category.value;
    const description = from.description.value;
    const price = from.price.value;
    const image = from.image.files[0];
    if (!image) {
      const productData = {
        id: product._id,
        name,
        category,
        description,
        price,
      };
      console.log(productData);
      updateProduct(productData).then((data) => {
        console.log(data);
        toast.success("Product Updated Successfully");
      });
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const productData = {
          id: product._id,
          name,
          category,
          description,
          price,
          image: imageData.data.display_url,
        };
        console.log(productData);
        updateProduct(productData).then((data) => {
          console.log(data);
          toast.success("Product Updated Successfully");
        });
      });
  };
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
            onSubmit={handleUpdateProduct}
            className="space-y-1 ng-untouched ng-pristine ng-valid "
          >
            <div className="text-center">
              <h1 className="text-xl"> Update Your Product!</h1>
            </div>

            <div className="space-y-3 text-sm ">
              <label className="block text-sm">product Name</label>
              <input
                type="text"
                name="productname"
                placeholder="Enter Your product Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                defaultValue={product?.name}
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter category Year"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                defaultValue={product?.category}
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter Your Shop Description"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                defaultValue={product?.description}
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter Your price"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                defaultValue={product?.price}
              />
            </div>

            <div className="py-2 w-full">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="file-input  file-input-success w-full "
                defaultValue={product?.image}
              />
            </div>
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-5 font-semibold rounded-lg text-white bg-[#3BB77E] "
              >
                Submit & Update
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
