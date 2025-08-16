import { baseApi } from "@/redux/baseApi";
import type { IResponse, ITourPackage } from "@/types";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            invalidatesTags: ["BOOKING"],
            query: (bookingData) => ({
                url: "/booking",
                method: "POST",
                data: bookingData
            })
        }),
        getTour: builder.query<ITourPackage[], unknown>({
            providesTags: ["TOUR"],
            query: (params) => ({
                url: "/tour",
                method: "GET",
                params: params
            }),
            transformResponse: (response: IResponse<ITourPackage[]>) => response.data
        }),
    })
});

export const { useAddBookingMutation } = bookingApi;