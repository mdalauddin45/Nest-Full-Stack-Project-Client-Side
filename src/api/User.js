export const hostRequest = async (user) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const getRole = async (email) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const user = await response.json();
  return user?.role;
};

export const getAllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  console.log("test");
  const users = await response.json();

  return users;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
      body: JSON.stringify({ ...user, role: "host" }),
    }
  );
  const users = await response.json();

  return users;
};
