import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import APIClient, { type ErrorResponse } from "../service/api-client";
import type {
  bookingSchema,
  viewBookingSchema,
} from "../types/validation-booking";
import type { z } from "zod";
import type { BookingDetails } from "../types/type";

export default function useCreateBookingTransaction() {
  const apiClient = new APIClient(`/booking-transaction`);
  return useMutation({
    mutationFn: (data: z.infer<typeof bookingSchema>) => {
      return apiClient.post(data);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data.message ||
        "Oops! Something went wrong. Please try again.";
      alert(message);
    },
  });
}

export const useViewBookingTransaction = () => {
  const apiClient = new APIClient(`/check-booking`);
  return useMutation<
    BookingDetails,
    AxiosError<ErrorResponse>,
    z.infer<typeof viewBookingSchema>
  >({
    mutationFn: (data) => {
      return apiClient.post(data).then((res) => res.data);
    },
  });
};
