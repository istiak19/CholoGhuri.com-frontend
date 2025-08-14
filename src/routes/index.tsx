import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generatingRoute";
import { createBrowserRouter } from "react-router";
import { adminSidebarRoute } from "./adminRoutes";
import { userSidebarRoute } from "./userRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component: About
      },
    ]
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [...generateRoutes(adminSidebarRoute)]
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [...generateRoutes(userSidebarRoute)]
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
]);

export default router;