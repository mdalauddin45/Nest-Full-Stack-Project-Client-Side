export const hostRequest = async (user) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("nest-token")}`,
      },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const getRole = async (email) => {
  const response = await fetch(`http://localhost:5000/user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
  });
  const user = await response.json();
  return user?.role;
};

// // sealer and buyer
// export const getAllUsers = async () => {
//   const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("nest-token")}`,
//     },
//   });
//   const users = await response.json();
//   console.log(users);
//   return users;
// };

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("nest-token")}`,
    },
    body: JSON.stringify({ ...user, role: "host" }),
  });
  const users = await response.json();

  return users;
};
