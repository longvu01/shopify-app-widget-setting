import { useEffect, useState } from "react";
import type { ISelectData } from "~/types";

export const useGetCountries = () => {
  const [countries, setCountries] = useState<ISelectData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>({});

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name",
        );
        const countries = await response.json();
        setCountries(
          countries
            .map((country: { name: { common: string } }) => {
              return {
                value: country.name.common,
                label: country.name.common,
              };
            })
            .sort((a: ISelectData, b: ISelectData) =>
              a.value.localeCompare(b.value),
            ),
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { countries, loading, error };
};
