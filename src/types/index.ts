export type { ISentOtp } from "./auth";

export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
};