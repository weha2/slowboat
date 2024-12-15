import type { CountryCode } from "~/types/country-code";
import type { CountryNationality } from "~/types/country-nationality";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countryCodes: [] as CountryCode[],
    countryNationalities: [] as CountryNationality[],
  }),
  actions: {
    async init() {
      const { getCountryCodes } = useCountryCode();
      const res1 = await getCountryCodes();
      if (res1.data) {
        this.countryCodes = res1.data;
      }
      const { getCountryNationalities } = useCountryNationality();
      const res2 = await getCountryNationalities();
      if (res2.data) {
        this.countryNationalities = res2.data;
      }
    },
  },
});
