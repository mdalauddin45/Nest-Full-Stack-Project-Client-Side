// This file is used to make a post request to the backend to make a payment
export const postPyament = (paymentData) => {
  // Post method fetch
  return fetch(`${process.env.REACT_APP_API_URL}/payment`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(paymentData),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

// fail to make a payment
export const failedPayment = (paymentData) => {
  // Post method fetch
  return fetch(`${process.env.REACT_APP_API_URL}/payment/failed`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(paymentData),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
