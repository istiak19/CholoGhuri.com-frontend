import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const AddTour = lazy(() => import("@/pages/Admin/AddTour"));

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
                title: "Add Tour",
                url: "/admin/add-tour",
                component: AddTour,
            },
        ],
    },
];