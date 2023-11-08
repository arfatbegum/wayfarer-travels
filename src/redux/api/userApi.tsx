import { IUser, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addUser: build.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        users: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: USER_URL,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response: IUser[], meta: IMeta) => {
                return {
                    users: response,
                    meta,
                };
            },
            providesTags: [tagTypes.user],
        }),
        user: build.query({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        updateUser: build.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getProfile: build.query({
            query: () => ({
                url: `${USER_URL}/profile`,
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        updateProfile: build.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getMyBooking: build.query({
            query: () => ({
                url: `${USER_URL}/my-booking`,
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        getMyEnquiry: build.query({
            query: () => ({
                url: `${USER_URL}/my-enquiry`,
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        getMySingleEnquiry: build.query({
            query: (id) => ({
                url: `${USER_URL}/my-enquiry/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        getMyFeedback: build.query({
            query: () => ({
                url: `${USER_URL}/my-feedback`,
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
    }),
});

export const {
    useAddUserMutation,
    useUsersQuery,
    useUserQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetProfileQuery,
    useUpdateProfileMutation,
    useGetMyBookingQuery,
    useGetMyEnquiryQuery,
    useGetMySingleEnquiryQuery,
    useGetMyFeedbackQuery
} = userApi;