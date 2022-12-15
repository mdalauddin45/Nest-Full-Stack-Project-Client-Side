export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  //   Save user in db & get token
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("aircnc-token", data.token);
    });
};

export const saveBooking = (bookingData) => {
  // Post method fetch
  return fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify(bookingData),
  });
};
