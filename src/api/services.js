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
// get add order
export const addOrder = async (orderData) => {
  const response = await fetch(`http://localhost:5000/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();
  return data;
};

//get filtered order for customer
export const getOrders = async (email) => {
  const response = await fetch(`http://localhost:5000/orders/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// delet order
export const deleteorder = async (id) => {
  const response = await fetch(`http://localhost:5000/orders/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const result = await response.json();
  return result;
};

// get wishlist
export const addWishlist = async (wishlistData) => {
  const response = await fetch(`http://localhost:5000/wishlist`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(wishlistData),
  });

  const data = await response.json();
  return data;
};

export const deleteWishlit = async (id) => {
  console.log(id);
  const response = await fetch(`http://localhost:5000/wishlist/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const result = await response.json();
  return result;
};

//get filtered products for wishlist
export const getWishlist = async (email) => {
  const response = await fetch(`http://localhost:5000/wishlist/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// post a shop
export const addShop = async (shopData) => {
  const response = await fetch(`http://localhost:5000/shops`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(shopData),
  });

  const data = await response.json();
  return data;
};
//get filtered shops for shop owner
export const getShop = async (shop) => {
  const response = await fetch(`http://localhost:5000/shops/${shop}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// update a shop
export const updateShop = async (shopData) => {
  const response = await fetch(
    `http://localhost:5000/shops/${shopData?.email}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("nest-token")}`,
      },
      body: JSON.stringify(shopData),
    }
  );
  const data = await response.json();
  return data;
};

// update a shop
export const updateUser = async (shopData) => {
  const response = await fetch(
    `http://localhost:5000/shops/${shopData?.email}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("nest-token")}`,
      },
      body: JSON.stringify(shopData),
    }
  );
  const data = await response.json();
  return data;
};
