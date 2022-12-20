import { deleteUser } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getAllUsers } from "../../../api/User";

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [loading]);

  const getUsers = () => {
    setLoading(true);
    getAllUsers().then((data) => {
      setUsers(data);
      setLoading(true);
    });
  };
  console.log(users);
  const sellers = users.filter((x) => x.role === users.role);
  console.log(sellers);
  const handleDelet = (id) => {
    if (id) {
      deleteUser(id);
      toast.success("delet user Succussfuly");
      setLoading(!loading);
    }
  };
  return (
    <div>
      <h1>alla users page</h1>
    </div>
  );
};

export default AllUsers;
