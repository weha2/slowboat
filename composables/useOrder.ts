import type { ApiResponse } from "~/types/api-response";
import type { Invoice } from "~/types/invoice";
import type { Order } from "~/types/order";

export const useOrder = () => {
  const { $apiFetch } = useNuxtApp();

  const create = async (body: Order): Promise<ApiResponse<Invoice>> => {
    try {
      const res = await $apiFetch<Invoice>("/orders", {
        method: "POST",
        body: body,
      });
      return {
        success: true,
        data: res,
        error: null,
      };
    } catch (err: any) {
      return {
        success: false,
        data: null,
        error: `${err?.message}`,
      };
    }
  };

  return {
    create,
  };
};
