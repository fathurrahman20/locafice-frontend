import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import type { Office } from "../types/type";

const useOffices = () => {
  const offices = new APIClient<Office[]>("/offices");
  return useQuery({
    queryKey: ["offices"],
    queryFn: () => {
      return offices.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};

const useOffice = (slug: string) => {
  const office = new APIClient<Office>(`/office/${slug}`);

  return useQuery({
    queryKey: ["office", slug],
    queryFn: () => {
      return office.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    enabled: !!slug,
  });
};

export { useOffices, useOffice };
