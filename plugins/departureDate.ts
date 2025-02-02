import { Dayjs } from "dayjs";
import type { Product } from "~/types/product";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const formatDepartureDate = (
    date: Dayjs,
    product: Product | null
  ): string => {
    if (product?.type === "SLOWBOAT") {
      const startDate = date.set("h", 5).set("m", 0).tz(config.public.TZ);
      const endDate = date
        .add(1, "day")
        .set("h", 17)
        .set("m", 0)
        .tz(config.public.TZ);
      return `${startDate.format("YYYY-MM-DD hh:mm A")} ～ ${endDate.format(
        "YYYY-MM-DD hh:mm A (UTC Z)"
      )}`;
    }

    if (product?.type === "BUS") {
      const startDate = date.set("h", 0).set("m", 6).tz(config.public.TZ);
      const endDate = date.set("h", 18).set("m", 6).tz(config.public.TZ);
      return `${startDate.format("YYYY-MM-DD hh:mm A")} ～ ${endDate.format(
        "hh:mm A (UTC Z)"
      )}`;
    }

    if (product?.type === "TRAIN") {
      const startDate = date.set("h", 0).set("m", 0).tz(config.public.TZ);
      const endDate = date
        .add(1, "day")
        .set("h", 0)
        .set("m", 0)
        .tz(config.public.TZ);
      return `${startDate.format("YYYY-MM-DD hh:mm A")} ～ ${endDate.format(
        "YYYY-MM-DD hh:mm A (UTC Z)"
      )}`;
    }
    return "";
  };

  return {
    provide: {
      formatDepartureDate: formatDepartureDate,
    },
  };
});
