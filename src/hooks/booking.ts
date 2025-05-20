// import { queryClient } from "@/main";
// import APIClient, { ErrorResponse } from "@/service/api-client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
import APIClient, { type ErrorResponse } from "../service/api-client";
import type { bookingSchema } from "../types/validation-booking";
import type { z } from "zod";

export default function useCreateBookingTransaction() {
  const apiClient = new APIClient(`/booking-transaction`);
  //   const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: z.infer<typeof bookingSchema>) => {
      return apiClient.post(data);
    },
    // onSuccess: () => {
    //   toast.success(
    //     "🎉 Your booking is complete!"
    //   );
    //   navigate("/success-booking");
    // },
    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data.message ||
        "Oops! Something went wrong. Please try again.";
      //   toast.error(message);
      alert(message);
    },
  });
}
