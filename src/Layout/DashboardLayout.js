import React, { useContext } from "react";
import Menubar from "../components/Dashboard/Menubar";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // const [role, setRole] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   getRole(user?.email).then((data) => {
  //     setRole(data);
  //     setLoading(false);
  //   });
  // }, [user]);
  return (
    <div className="relative min-h-screen md:flex lg:flex justify-between">
      <Menubar></Menubar>
      <div>
        <h1>Menubar</h1>
      </div>
    </div>
  );
};

export default DashboardLayout;
