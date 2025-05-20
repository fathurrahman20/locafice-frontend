import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import type { City } from "../types/type";

const cities = new APIClient<City[]>("/cities");

const useCities = () =>
  useQuery({
    queryKey: ["cities"],
    queryFn: () => {
      return cities.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

export { useCities };
