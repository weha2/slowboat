import type { ApiResponse } from "~/types/api-response";
import type { Product } from "~/types/product";

export const useProduct = () => {
  const { $apiFetch } = useNuxtApp();

  const getProducts = async (): Promise<ApiResponse<Product[]>> => {
    try {
      const res = await $apiFetch<Product[]>("/products");
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

  const getProduct = async (id: number): Promise<ApiResponse<Product>> => {
    try {
      const res = await $apiFetch<Product>(`/products/${id}`);
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
    getProducts,
    getProduct,
  };
};
