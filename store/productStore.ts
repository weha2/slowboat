import { defineStore } from "pinia";
import type { Product } from "~/types/product";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: null as Product | null,
    products: [] as Product[],
  }),
  actions: {
    setProduct(product: Product) {
      this.product = product;
    },
  },
});
