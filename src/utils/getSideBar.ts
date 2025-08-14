import { role } from "@/constants/role";
import { adminSidebarRoute } from "@/routes/adminRoutes";
import { userSidebarRoute } from "@/routes/userRoutes";
import type { IRole } from "@/types";

export const getSideBar = (userRole: IRole) => {
    switch (userRole) {
        case role.superAdmin:
            return [...adminSidebarRoute];
        case role.admin:
            return [...adminSidebarRoute];
        case role.user:
            return [...userSidebarRoute];
        case role.guide:
            return [];
        default:
            return [];
    }
};