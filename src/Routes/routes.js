import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import UserDashboard from "../Pages/Accounts/UserAccounts/UserDashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/account",
        element: <DashboardLayout />,
        children: [
          {
            path: "/account/dashboard",
            element: <UserDashboard />,
          },
        ],
      },
    ],
  },
]);
