import { IService, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Service_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    services: build.query({
      query: (arg: Record<string, any>) => ({
        url: Service_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IService, meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    addService: build.mutation({
      query: (data) => ({
        url: Service_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    service: build.query({
      query: (id) => ({
        url: `${Service_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${Service_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `${Service_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useServicesQuery,
  useServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
