// Add a home
export const addProduct = async (productData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(productData),
  });

  const data = await response.json();
  return data;
};

//get all products
export const getAllProduct = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const data = await response.json();
  return data;
};

//get filtered products for seller
export const getProducts = async (email) => {
  const response = await fetch(`http://localhost:5000/products/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// update a home
export const updateProduct = async (productData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(productData),
  });

  const data = await response.json();
  return data;
};

// Delete a home
export const deleteproduct = async (id) => {
  const response = await fetch(`http://localhost:5000/product/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const result = await response.json();
  return result;
};
