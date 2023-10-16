import { IAdmin, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

const ADMIN_URL = "/admin";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/create-admin`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
    admin: build.query({
        query: (id) => ({
          url: `${ADMIN_URL}/${id}`,
          method: "GET",
        }),
        providesTags: [tagTypes.admin],
    }),
    updateAdmin: build.mutation({
        query: (data) => ({
          url: `${ADMIN_URL}/${data.id}`,
          method: "PATCH",
          data: data.body,
        }),
        invalidatesTags: [tagTypes.admin],
    }),
    deleteAdmin: build.mutation({
        query: (id) => ({
          url: `${ADMIN_URL}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: [tagTypes.admin],
    }),
    getProfile: build.query({
      query: () => ({
        url: `${ADMIN_URL }/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.superAdmin],
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL }/profile`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.superAdmin],
    }),
  }),
});

export const { useAdminsQuery, useAddAdminMutation, useDeleteAdminMutation, useUpdateAdminMutation, useAdminQuery, useGetProfileQuery, useUpdateProfileMutation } = adminApi;