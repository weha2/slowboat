import { defineStore } from "pinia";
import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const useDateStore = defineStore("date", {
  state: () => ({
    date: dayjs(),
  }),
  actions: {
    setDate(date: Dayjs) {
      this.date = date;
    },
    getCurrentDate(): Dayjs {
      return this.date;
    },
  },
});
