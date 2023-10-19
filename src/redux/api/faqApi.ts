import { IFAQ, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const FAQ= "/faq";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    faqs: build.query({
      query: (arg: Record<string, any>) => ({
        url: FAQ,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFAQ[], meta: IMeta) => {
        return {
          faqs: response,
          meta,
        };
      },
      providesTags: [tagTypes.faq],
    }),

    addFaq: build.mutation({
      query: (data) => ({
        url: FAQ,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    faq: build.query({
      query: (id) => ({
        url: `${FAQ}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    updateFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `${FAQ}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
    useAddFaqMutation,
    useFaqsQuery,
    useFaqQuery,
    useUpdateFaqMutation,
    useDeleteFaqMutation
} = faqApi;