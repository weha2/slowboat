export const useAdditionalStore = defineStore("additional", {
  state: () => ({
    additional: null as string | null,
  }),
  actions: {
    updateFields(additional: string) {
      this.additional = additional;
    },
  },
});
