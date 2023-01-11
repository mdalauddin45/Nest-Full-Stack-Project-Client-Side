import React, { useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const AddProductForm = ({
  handleSubmit,
  loading,

  selectedImage,
  imageChange,
}) => {
  return (
    <>
      <div className=" mt-6">
        <div className="w-[600px] lg:w-[1000px]  p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="product" className="block text-gray-600">
                Name of Product
              </label>

              <input
                className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                name="product"
                id="product"
                type="text"
                placeholder="Enter Your Product Name"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm w-full">
                <label htmlFor="shopname" className="block text-gray-600">
                  Shop Name
                </label>
                <input
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="shopname"
                  id="shopname"
                  type="text"
                  placeholder="Enter Your Shop Name"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="rating" className="block text-gray-600">
                  Rating
                </label>
                <input
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="rating"
                  id="rating"
                  type="text"
                  placeholder="Rating"
                  required
                />
              </div>

              <div className="space-y-1 text-sm w-full">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  name="option"
                  className="select select-bordered  w-full h-16 bg-white "
                >
                  <option value="fruit">Fruit </option>

                  <option value="coffe">Coffe & Tea</option>
                  <option value="cake">Cake & Milk</option>
                  <option value="snack">Snack</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="beverage">Beverage</option>
                  <option value="nonfood & pharmacy.">
                    Nonfood & Pharmacy.
                  </option>
                  <option value="produce & floral">Produce & Floral</option>
                  <option value="deli">Deli</option>
                  <option value="prepared foods">Prepared Foods</option>
                  <option value="meat">Meat</option>
                  <option value="seafood">Seafood</option>
                </select>
              </div>
            </div>
            <div>
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="description"
                  id="description"
                  type="text"
                  placeholder="description"
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              {selectedImage ? (
                <div className=" w-full">
                  {/* <p className="text-center ">
                    <label
                      className="btn btn-sm bg-[#3BB77E] text-white border-none "
                      htmlFor="uploadImage"
                    >
                      Upload new
                    </label>
                  </p> */}

                  <div className="flex justify-center ">
                    <PhotoProvider>
                      <PhotoView src={URL.createObjectURL(selectedImage)}>
                        <label htmlFor="uploadImage">
                          <img
                            className="w-full h-64 object-cover rounded-md"
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                          />
                        </label>
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="uploadImage"
                  className="flex flex-col w-full border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"
                >
                  <div className="flex flex-col py-2 items-center justify-center h-60">
                    <ArrowUpTrayIcon className="w-8 h-8" />
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo
                    </p>
                  </div>
                </label>
              )}
              <input
                required
                id="uploadImage"
                onChange={imageChange}
                accept="image/*"
                hidden
                type="file"
                className="opacity-0"
              />
            </div>

            <div className="space-y-2">
              <div>
                <PrimaryButton
                  type="submit"
                  classes="w-full px-8 py-5 font-semibold rounded-lg bg-[#3BB77E] text-white"
                >
                  {loading ? <SmallSpinner /> : "Save & Continue"}
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
