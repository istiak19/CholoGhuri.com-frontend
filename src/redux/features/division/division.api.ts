import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addDivision: builder.mutation({
            invalidatesTags: ["DIVISION"],
            query: (divisionData) => ({
                url: "/division/create",
                method: "POST",
                data: divisionData
            })
        }),
        getDivision: builder.query({
            providesTags: ["DIVISION"],
            query: (params) => ({
                url: "/division",
                method: "GET",
                params
            }),
            transformResponse: (response) => response.data
        }),
        deleteDivision: builder.mutation({
            query: (id: string) => ({
                url: `/division/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["DIVISION"],
        }),
    })
});

export const { useAddDivisionMutation, useGetDivisionQuery, useDeleteDivisionMutation } = divisionApi;