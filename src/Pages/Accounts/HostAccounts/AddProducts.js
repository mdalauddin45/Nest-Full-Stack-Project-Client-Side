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
    const name = form.name.value;
    const originalprice = form.oprice.value;
    const resaleprice = form.rprice.value;
    const used = form.years.value;
    const number = form.number.value;
    const location = form.location.value;
    const category = form.category.value;
    const condition = form.condition.value;
    const description = form.description.value;
    const image = event.target.image.files[0];
    // console.log(
    //   name,
    //   originalprice,
    //   resaleprice,
    //   used,
    //   category,
    //   number,
    //   location,
    //   image,
    //   condition,
    //   description
    // );
    setLoading(true);
    imageUpload(image)
      .then((res) => {
        const categoriData = {
          name,
          location,
          originalprice,
          resaleprice,
          used,
          number,
          category,
          image: res.data.display_url,
          email: user?.email,
          seller: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          // published: date,
          condition,
          description,
        };
        addProduct(categoriData).then((data) => {
          console.log(data);
          setLoading(false);
          toast.success(" Added Successfuly !");
          navigate("/dashboard/manage-products");
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
