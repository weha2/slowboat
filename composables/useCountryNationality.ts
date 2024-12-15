import type { ApiResponse } from "~/types/api-response";
import type { CountryCode } from "~/types/country-code";
import type { CountryNationality } from "~/types/country-nationality";

export const useCountryNationality = () => {
  const { $apiFetch } = useNuxtApp();

  const getCountryNationalities = async (): Promise<
    ApiResponse<CountryNationality[]>
  > => {
    try {
      const res = await $apiFetch<CountryNationality[]>(
        "/country-nationalities"
      );
      return {
        success: true,
        data: res,
        error: null,
      };
    } catch (err) {
      return {
        success: false,
        data: null,
        error: `${err}`,
      };
    }
  };

  return {
    getCountryNationalities,
  };
};
