import { IContact, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Contact_URL = "/contact";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    contacts: build.query({
      query: (arg: Record<string, any>) => ({
        url: Contact_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IContact[], meta: IMeta) => {
        return {
          contacts: response,
          meta,
        };
      },
      providesTags: [tagTypes.contact],
    }),

    addContact: build.mutation({
      query: (data) => ({
        url: Contact_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.contact],
    }),
    contact: build.query({
      query: (id) => ({
        url: `${Contact_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.contact],
    }),
    updateContact: build.mutation({
      query: (data) => ({
        url: `${Contact_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.contact],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `${Contact_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.contact],
    }),
  }),
});

export const {
  useAddContactMutation,
  useContactsQuery,
  useContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
