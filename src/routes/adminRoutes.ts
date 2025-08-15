import AddDivision from "@/pages/Admin/AddDivision";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const AddTour = lazy(() => import("@/pages/Admin/AddTour"));
const AddTourType = lazy(() => import("@/pages/Admin/AddTourType"));

export const adminSidebarRoute = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics,
            },
            {
                title: "Add Division",
                url: "/admin/add-division",
                component: AddDivision,
            },
            {
                title: "Add Tour",
                url: "/admin/add-tour",
                component: AddTour,
            },
            {
                title: "Add Tour Type",
                url: "/admin/add-tour-type",
                component: AddTourType,
            },
        ],
    },
];