export const setAuthToken = (user) => {
  // console.log(user);
  const currentUser = {
    email: user.email,
  };

  //   Save user in db & get token
  fetch(`https://nest-mauve.vercel.app/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("nest-token", data.token);
    });
};
// export const updateUserShop = (UpdateShop) => {
//   fetch(`https://nest-mauve.vercel.app/user/${UpdateShop?.email}`, {
//     method: "PATCH",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(UpdateShop),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       //Save token in LocalStorage
//       localStorage.setItem("nest-token", data.token);
//     });
// };

//get filtered products for seller
export const getUser = async (email) => {
  const response = await fetch(`https://nest-mauve.vercel.app/user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

export const saveBooking = (bookingData) => {
  // Post method fetch
  return fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify(bookingData),
  });
};
