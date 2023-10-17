import { ICategory, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Category_URL = "/Category";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    categories: build.query({
      query: (arg: Record<string, any>) => ({
        url: Category_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: ICategory, meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
      providesTags: [tagTypes.category],
    }),

    addCategory: build.mutation({
      query: (data) => ({
        url: Category_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    Category: build.query({
      query: (id) => ({
        url: `${Category_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    updateCategory: build.mutation({
      query: (data) => ({
        url: `${Category_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${Category_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useCategoriesQuery,
  useCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
