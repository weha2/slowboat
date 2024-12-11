import type { ApiResponse } from "~/types/api-response";
import type { Order } from "~/types/order";

export const useOrder = () => {
  const { $apiFetch } = useNuxtApp();

  const create = async (body: Order): Promise<ApiResponse<Order>> => {
    try {
      const res = await $apiFetch<Order>("/orders", {
        method: "POST",
        body: body,
      });
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
    create,
  };
};
