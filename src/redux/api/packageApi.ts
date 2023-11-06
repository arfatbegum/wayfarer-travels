import { IPackage, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Package_URL = "/package";

export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    packages: build.query({
      query: (arg: Record<string, any>) => ({
        url: Package_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IPackage, meta: IMeta) => {
        return {
          packages: response,
          meta,
        };
      },
      providesTags: [tagTypes.package],
    }),

    addPackage: build.mutation({
      query: (data) => ({
        url: Package_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.package],
    }),
    package: build.query({
      query: (id) => ({
        url: `${Package_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.package],
    }),
    updatePackage: build.mutation({
      query: (data) => ({
        url: `${Package_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.package],
    }),
    deletePackage: build.mutation({
      query: (id) => ({
        url: `${Package_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.package],
    }),
  }),
});

export const {
  useAddPackageMutation,
  usePackagesQuery,
  usePackageQuery,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = packageApi;
