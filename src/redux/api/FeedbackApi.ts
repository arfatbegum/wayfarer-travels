import { IFeedback, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Feedback_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    feedbacks: build.query({
      query: (arg: Record<string, any>) => ({
        url: Feedback_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IFeedback[], meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),

    addFeedback: build.mutation({
      query: (data) => ({
        url: Feedback_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useAddFeedbackMutation, useFeedbacksQuery } = feedbackApi;
