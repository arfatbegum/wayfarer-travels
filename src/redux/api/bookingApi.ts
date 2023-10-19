import { IBooking, IMeta } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const Booking_URL = "/booking";

export const BookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    bookings: build.query({
      query: (arg: Record<string, any>) => ({
        url: Booking_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),

    addBooking: build.mutation({
      query: (data) => ({
        url: `${Booking_URL}/create-booking`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    booking: build.query({
      query: (id) => ({
        url: `${Booking_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    updateBooking: build.mutation({
      query: (data) => ({
        url: `${Booking_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${Booking_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useBookingsQuery,
  useBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = BookingApi;
