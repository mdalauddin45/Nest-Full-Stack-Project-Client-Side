import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addProduct, imageUpload } from "../../../api/ImageUpload";
import { AuthContext } from "../../../contexts/AuthProvider";
import AddProductForm from "./AddProductForm";

const AddProducts = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  // const [selected, setSelected] = useState(new Date());
  // const date = format(selected, "Pp");
  // console.log(date);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.product.value;
    const price = form.price.value;
    const shop = form.shopname.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = event.target.image.files[0];
    // console.log(product, price, shopName, rating, category, image, description);
    setLoading(true);
    imageUpload(image)
      .then((res) => {
        const categoriData = {
          name,
          price,
          shop,
          rating,
          category,
          image: res.data.display_url,
          email: user?.email,
          seller: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          description,
        };
        // console.log(categoriData);
        addProduct(categoriData).then((data) => {
          // console.log(data);
          setLoading(false);
          toast.success("Added Successfuly !");
          navigate("/account/shop");
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    // console.log(image);
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image?.name?.slice(0, 30));
  };
  return (
    <div className="lg:px-20 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800  text-center">
        Add Product
      </h1>
      <AddProductForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        preview={preview}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddProducts;
