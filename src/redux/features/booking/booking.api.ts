import { baseApi } from "@/redux/baseApi";

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
        getBooking: builder.query({
            providesTags: ["BOOKING"],
            query: (params) => ({
                url: "/booking",
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response.data
        }),
    })
});

export const { useAddBookingMutation, useGetBookingQuery } = bookingApi;