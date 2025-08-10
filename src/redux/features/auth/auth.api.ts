import type { IResponse, ISentOtp, IVerify } from "@/types";
import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        logout: builder.mutation({
            invalidatesTags: ["USER"],
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            })
        }),
        sentOtp: builder.mutation<IResponse<null>, ISentOtp>({
            query: (userInfo) => ({
                url: "/otp/send",
                method: "POST",
                data: userInfo
            })
        }),
        verifyOtp: builder.mutation<IResponse<null>, IVerify>({
            query: (userInfo) => ({
                url: "/otp/verify",
                method: "POST",
                data: userInfo
            })
        }),
        getMeUser: builder.query({
            providesTags: ["USER"],
            query: () => ({
                url: "/user/get-me",
                method: "GET",
            })
        })
    })
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useSentOtpMutation, useVerifyOtpMutation, useGetMeUserQuery } = authApi;