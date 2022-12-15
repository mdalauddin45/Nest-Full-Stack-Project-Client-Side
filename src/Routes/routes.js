import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AccountDetails from "../Pages/Accounts/UserAccounts/AccountDetails";
import MyAddress from "../Pages/Accounts/UserAccounts/MyAddress";
import Orders from "../Pages/Accounts/UserAccounts/Orders";
import TrackOrders from "../Pages/Accounts/UserAccounts/TrackOrders";
import UserDashboard from "../Pages/Accounts/UserAccounts/UserDashboard";
import Login from "../Pages/SignIn&Up/Login";
import SignUp from "../Pages/SignIn&Up/SignUp";
import Welcome from "../Pages/Welcome/Welcome";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/account",
            element: <Welcome />,
          },
          {
            path: "/account/dashboard",
            element: <UserDashboard />,
          },
          {
            path: "/account/orders",
            element: <Orders />,
          },
          {
            path: "/account/trackorders",
            element: <TrackOrders />,
          },
          {
            path: "/account/address",
            element: <MyAddress />,
          },
          {
            path: "/account/accountdetails",
            element: <AccountDetails />,
          },
        ],
      },
    ],
  },
]);
