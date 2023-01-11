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

  const [selectedImage, setSelectedImage] = useState();

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
    const option = form.option.value;
    const description = form.description.value;

    // console.log(product, price, shopName, rating, category, image, description);
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const categoriData = {
          name,
          price,
          shop,
          rating,
          category: option,
          image: imageData.data.display_url,
          email: user?.email,
          seller: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          description,
        };
        console.log(categoriData);
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

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <div className="lg:px-20 md:px-10 px-10">
      <AddProductForm
        handleSubmit={handleSubmit}
        loading={loading}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        imageChange={imageChange}
      />
    </div>
  );
};

export default AddProducts;
