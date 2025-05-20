import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import type { City } from "../types/type";

const useCities = () => {
  const cities = new APIClient<City[]>("/cities");

  return useQuery({
    queryKey: ["cities"],
    queryFn: () => {
      return cities.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};

const useCity = (slug: string) => {
  const city = new APIClient<City>(`/city/${slug}`);

  return useQuery({
    queryKey: ["city", slug],
    queryFn: () => {
      return city.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    enabled: !!slug,
  });
};

export { useCities, useCity };
