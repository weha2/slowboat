import type { ApiResponse } from "~/types/api-response";
import type { Charge } from "~/types/charge";

export const usePayment = () => {
  const { $apiFetch } = useNuxtApp();

  const createCharge = async (body: {
    token: string;
    invoiceNumber: string;
    amount: number;
  }): Promise<ApiResponse<Charge>> => {
    try {
      const res = await $apiFetch<Charge>("/payments/charge", {
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
    createCharge,
  };
};
