import { IReview, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Review= "/review";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    reviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: Review,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IReview[], meta: IMeta) => {
        return {
            reviews: response,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),

    addReview: build.mutation({
      query: (data) => ({
        url: Review,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    review: build.query({
      query: (id) => ({
        url: `${Review}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    updateReview: build.mutation({
      query: (data) => ({
        url: `${Review}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${Review}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
    useAddReviewMutation,
    useReviewsQuery,
    useReviewQuery,
    useUpdateReviewMutation,
    useDeleteReviewMutation
} = reviewApi;