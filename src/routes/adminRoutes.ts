import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";

export const adminSidebarRoute = [
    {
        title: "DashBoard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics
            },
            {
                title: "Add Tour",
                url: "/admin/add-tour",
                component: AddTour
            },
        ],
    },
]