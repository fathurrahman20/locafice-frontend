import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import type { Office } from "../types/type";

const offices = new APIClient<Office[]>("/offices");

const useOffices = () =>
  useQuery({
    queryKey: ["offices"],
    queryFn: () => {
      return offices.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

export { useOffices };
