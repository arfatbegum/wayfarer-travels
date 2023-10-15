import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

const SUPER_ADMIN_URL = "/super-admin";

export const superAdminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
        query: () => ({
          url: `${SUPER_ADMIN_URL }/profile`,
          method: "GET",
        }),
        providesTags: [tagTypes.superAdmin],
      }),
      updateProfile: build.mutation({
        query: (data) => ({
          url: `${SUPER_ADMIN_URL }/profile`,
          method: "PATCH",
          data: data.body,
        }),
        invalidatesTags: [tagTypes.superAdmin],
      }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = superAdminApi;