import type { ComponentType } from "react";

export type { ISentOtp, IVerify } from "./auth";
export type { ITourPackage } from "./tour";
export type { Faq3Props, FaqItem } from "./home";

export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
};

export interface ITourType{
    _id:string;
    name:string
};

export interface ISidebarItem {
    title: string;
    items: {
        title: string;
        url: string;
        component: ComponentType;
    }[];
};

export interface IDivision {
    _id: string
    name: string
    thumbnail: string
    description: string
    createdAt: string
    updatedAt: string
    slug: string
};

export type IRole = "GUIDE" | "USER" | "ADMIN" | "SUPER_ADMIN"

type ZodIssue = {
    code: string;
    expected: string;
    received: string;
    path: string[];
    message: string;
};

type ErrorSource = {
    path: string;
    message: string;
};

export interface IErrorResponse {
    success: boolean;
    message: string;
    errorSources?: ErrorSource[];
    err?: {
        issues: ZodIssue[];
        name: string;
    };
    stack?: string;
};

export interface SectionHeadingProps {
    kicker?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
};