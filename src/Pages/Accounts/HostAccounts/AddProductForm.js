import React from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
const AddProductForm = ({
  handleSubmit,
  loading,
  handleImageChange,
  preview,
  uploadButtonText,
}) => {
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name of Product
              </label>

              <input
                className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                name="name"
                id="name"
                type="text"
                placeholder="Enter Your Product Name"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="Orginal_Price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="oprice"
                  id="Orginal_Price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Resale_Price" className="block text-gray-600">
                  Shop Name
                </label>
                <input
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="rprice"
                  id="Resale_Price"
                  type="text"
                  placeholder="Enter Your Shop Name"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
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

              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <input
                  className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-green-500  text-gray-900"
                  name="category"
                  id="category"
                  type="text"
                  placeholder="Category"
                  required
                />
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

            <div className="flex space-x-4 items-center">
              <label
                htmlFor="image"
                className="p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  hover:bg-[#3BB77E]  hover:border-white hover:text-white"
              >
                {uploadButtonText}
                <input
                  type="file"
                  onChange={(event) => handleImageChange(event.target.files[0])}
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
              </label>
              {preview && (
                <img src={preview} className="w-16 h-16" alt="preview_img" />
              )}
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
