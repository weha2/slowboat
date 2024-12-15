import type { ApiResponse } from "~/types/api-response";
import type { CountryCode } from "~/types/country-code";

export const useCountryCode = () => {
  const { $apiFetch } = useNuxtApp();

  const getCountryCodes = async (): Promise<ApiResponse<CountryCode[]>> => {
    try {
      const res = await $apiFetch<CountryCode[]>("/country-codes");
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
    getCountryCodes,
  };
};
