import React, { useContext, useEffect, useState } from "react";

const HostRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);
  useEffect(() => {
    setRoleLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setRoleLoading(false);
    });
  }, [user]);

  if (loading || roleLoading) {
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );
  }

  if (user && user.uid && role === "host") {
    return children;
  }
  return <Navigate to="/account" />;
};

export default HostRoute;
