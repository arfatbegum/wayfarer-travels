import { ITeam, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Team_URL = "/team";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    teams: build.query({
      query: (arg: Record<string, any>) => ({
        url: Team_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: ITeam[], meta: IMeta) => {
        return {
          teams: response,
          meta,
        };
      },
      providesTags: [tagTypes.team],
    }),

    addTeam: build.mutation({
      query: (data) => ({
        url: Team_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.team],
    }),
    team: build.query({
      query: (id) => ({
        url: `${Team_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.team],
    }),
    updateTeam: build.mutation({
      query: (data) => ({
        url: `${Team_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.team],
    }),
    deleteTeam: build.mutation({
      query: (id) => ({
        url: `${Team_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.team],
    }),
  }),
});

export const {
  useAddTeamMutation,
  useTeamsQuery,
  useTeamQuery,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamApi;
