import type { ApiResponse } from "~/types/api-response";
import type { Gender } from "~/types/gender";

export const useGender = () => {
  const { $apiFetch } = useNuxtApp();

  const getGenders = async (): Promise<ApiResponse<Gender[]>> => {
    try {
      const res = await $apiFetch<Gender[]>("/genders");
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
    getGenders,
  };
};
