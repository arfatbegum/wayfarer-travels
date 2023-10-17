import { INews, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const NEWS_URL= "/news";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    newses: build.query({
      query: (arg: Record<string, any>) => ({
        url: NEWS_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: INews, meta: IMeta) => {
        return {
          newses: response,
          meta,
        };
      },
      providesTags: [tagTypes.news],
    }),

    addNews: build.mutation({
      query: (data) => ({
        url: NEWS_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.news],
    }),
    news: build.query({
      query: (id) => ({
        url: `${NEWS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.news],
    }),
    updateNews: build.mutation({
      query: (data) => ({
        url: `${NEWS_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.news],
    }),
    deleteNews: build.mutation({
      query: (id) => ({
        url: `${NEWS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.news],
    }),
  }),
});

export const {
    useAddNewsMutation,
    useNewsesQuery,
    useNewsQuery,
    useUpdateNewsMutation,
    useDeleteNewsMutation
} = newsApi;