import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import { generateRoutes } from "@/utils/generatingRoute";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarRoute } from "./adminRoutes";
import { userSidebarRoute } from "./userRoutes";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { IRole } from "@/types";
import Home from "@/pages/Home";
import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Verify = lazy(() => import("@/pages/Verify"));
const Unauthorized = lazy(() => import("@/pages/Unauthorized"));
const Tours = lazy(() => import("@/pages/Tours"));
const TourDetails = lazy(() => import("@/pages/TourDetails"));
const Booking = lazy(() => import("@/pages/User/Booking"));
const Success = lazy(() => import("@/pages/Payment/Success"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

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
        path: "contact",
        Component: Contact
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
        Component: withAuth(Booking)
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
    Component: withAuth(Verify)
  },
  {
    path: "/unauthorized",
    Component: Unauthorized
  },
  {
    path: "/payment/success",
    Component: withAuth(Success)
  },
  {
    path: "*",
    Component: NotFound
  },
]);

export default router;