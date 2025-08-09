export type { ISentOtp, IVerify } from "./auth";

export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
};