export const useAdditionalStore = defineStore("additional", {
  state: () => ({
    pickupLocation: null as string | null,
    additionalRequest: null as string | null,
  }),
  actions: {
    updatePickupLocation(value: string) {
      this.pickupLocation = value;
    },
    updateAdditionalRequest(value: string) {
      this.additionalRequest = value;
    },
  },
});
