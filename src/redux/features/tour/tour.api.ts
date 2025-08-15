import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTourType: builder.mutation({
            invalidatesTags: ["TYPE"],
            query: (tourTypeName) => ({
                url: "/tour/create-tour-type",
                method: "POST",
                data: tourTypeName
            })
        }),
        getTourType: builder.query({
            providesTags: ["TYPE"],
            query: () => ({
                url: "/tour/tour-types",
                method: "GET",
            }),
            transformResponse: (response) => response.data
        }),
        deleteTourType: builder.mutation({
            query: (id: string) => ({
                url: `/tour/tour-types/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["TYPE"],
        }),

        // Tour

        addTour: builder.mutation({
            invalidatesTags: ["TOUR"],
            query: (tourData) => ({
                url: "/tour/create",
                method: "POST",
                data: tourData
            })
        }),
    })
});

export const { useGetTourTypeQuery, useAddTourTypeMutation, useDeleteTourTypeMutation, useAddTourMutation } = tourApi;