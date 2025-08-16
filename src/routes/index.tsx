import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generatingRoute";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarRoute } from "./adminRoutes";
import { userSidebarRoute } from "./userRoutes";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { IRole } from "@/types";
import Home from "@/pages/Home";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import Booking from "@/pages/User/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "/tours",
        Component: Tours
      },
      {
        path: "/tours/:id",
        Component: TourDetails
      },
      {
        path: "/booking/:id",
        Component: Booking
      },
    ]
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, role.admin as IRole),
    children: [
      {
        index: true, element: <Navigate to="/admin/analytics" />
      },
      ...generateRoutes(adminSidebarRoute)
    ]
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout, role.user as IRole),
    children: [
      {
        index: true, element: <Navigate to="/user/booking" />
      },
      ...generateRoutes(userSidebarRoute)
    ]
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/register",
    Component: Register
  },
  {
    path: "/verify",
    Component: Verify
  },
  {
    path: "/unauthorized",
    Component: Unauthorized
  },
]);

export default router;