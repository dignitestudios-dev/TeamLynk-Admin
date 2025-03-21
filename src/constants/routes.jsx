import { lazy } from "react";
import Layout from "../components/Globals/Layout";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import UserProfile from "../pages/UserProfile";
import Notifications from "../pages/Notifications";
import Subscriptions from "../pages/Subscriptions";
import Revenue from "../pages/Revenue";
// Auth Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyEmail from "../pages/VerifyEmail";
import VerifyOtp from "../pages/VerifyOtp";
import ChangePassword from "../pages/ChangePassword";

// export const routes = createBrowserRouter([
//   {
//     path:"/login",
//     element:<Login/>
//   },
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Dashboard/>
//       }
//     ]
//   }
// ]);

export const routes = [
  {
    title: "Login Page",
    url: "/login",
    page: <Login />,
  },
  {
    title: "Verify Email Page",
    url: "/verify-email",
    page: <VerifyEmail />,
  },
  {
    title: "Verify OTP Page",
    url: "/verify-otp",
    page: <VerifyOtp />,
  },
  {
    title: "Change Password Page",
    url: "/change-password",
    page: <ChangePassword />,
  },
  {
    title: "Dashboard Page",
    url: "/",
    page: <Layout pages={<Dashboard />} />,
  },
  {
    title: "Users Page",
    url: "/users",
    page: <Layout pages={<Users />} />,
  },
  {
    title: "Subscriptions Page",
    url: "/subscriptions",
    page: <Layout pages={<Subscriptions />} />,
  },
  {
    title: "Revenue Page",
    url: "/revenue/:id",
    page: <Layout pages={<Revenue />} />,
  },
  {
    title: "Notifications Page",
    url: "/notifications",
    page: <Layout pages={<Notifications />} />,
  },
  {
    title: "User Profile Page",
    url: "/user-profile/:id",
    page: <Layout pages={<UserProfile />} />,
  },
];
