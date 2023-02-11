export const imageUpload = async (image) => {
  // console.log(image);
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  }
};

// Add a Category
export const addProduct = async (categoriData) => {
  const response = await fetch(`https://nest-server-side.vercel.app/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(categoriData),
  });

  const data = await response.json();
  return data;
};

// //get all products
// export const getAllProduct = async () => {
//   const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
//   const data = await response.json();
//   return data;
// };

// //get filtered products for seller
// export const getProducts = async (email) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_API_URL}/products/${email}`,
//     {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("nest-token")}`,
//       },
//     }
//   );
//   const data = await response.json();
//   return data;
// };

// // update a Product
// export const updateProduct = async (categoriData) => {
//   const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("nest-token")}`,
//     },
//     body: JSON.stringify(categoriData),
//   });

//   const data = await response.json();
//   return data;
// };

// // Delete a Products
// export const deleteproduct = async (id) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_API_URL}/product/${id}`,
//     {
//       method: "DELETE",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("nest-token")}`,
//       },
//     }
//   );
//   const result = await response.json();
//   return result;
// };

// // Search Result
// export const getCategory = async (category) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_API_URL}/category?category=${category}`
//   );
//   const data = await response.json();
//   return data;
// };
