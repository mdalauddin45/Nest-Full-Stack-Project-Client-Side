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
  const response = await fetch(`https://nest-server-side.vercel.app/products/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// update a products
export const updateProduct = async (productData) => {
  const response = await fetch(
    `https://nest-server-side.vercel.app/product/${productData.id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("nest-token")}`,
      },
      body: JSON.stringify(productData),
    }
  );

  const data = await response.json();
  return data;
};

// Delete a home
export const deleteproduct = async (id) => {
  const response = await fetch(`https://nest-server-side.vercel.app/product/${id}`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/orders`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/orders/${email}`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/orders/${id}`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/wishlist`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/wishlist/${id}`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/wishlist/${email}`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/shops`, {
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
  const response = await fetch(`https://nest-server-side.vercel.app/shops/${shop}`, {
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
    `https://nest-server-side.vercel.app/shops/${shopData?.email}`,
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
    `https://nest-server-side.vercel.app/shops/${shopData?.email}`,
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
// post a shop
export const addCheckout = async (CheckOutData) => {
  const response = await fetch(`https://nest-server-side.vercel.app/checkout`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(CheckOutData),
  });

  const data = await response.json();
  return data;
};

export const getCheckout = async (email) => {
  const response = await fetch(`https://nest-server-side.vercel.app/checkout/${email}`, {
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
export const updateCheckOut = async (checkOutData) => {
  const response = await fetch(
    `https://nest-server-side.vercel.app/checkout/${checkOutData?.email}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("nest-token")}`,
      },
      body: JSON.stringify(checkOutData),
    }
  );
  const data = await response.json();
  return data;
};

// delete checkout
export const deleteCheckOut = async (id) => {
  const response = await fetch(`https://nest-server-side.vercel.app/checkout/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const result = await response.json();
  return result;
};
