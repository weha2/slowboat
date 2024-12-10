import { defineStore } from "pinia";
import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const useDateStore = defineStore("date", {
  state: () => ({
    date: dayjs(),
    departureStart: dayjs(),
    departureEnd: dayjs(),
  }),
  getters: {
    formattedDepartureDate(): string {
      return `${this.departureStart.format(
        "YYYY-MM-DD hh:mm A"
      )} ～ ${this.departureEnd.format("YYYY-MM-DD hh:mm A")} (UTC +07:00)`;
    },
  },
  actions: {
    setDate(date: Dayjs) {
      this.date = date;
      this.setDapartureStart();
      this.setDepartureEnd()
    },
    getCurrentDate(): Dayjs {
      return this.date;
    },
    setDapartureStart() {
      this.departureStart = dayjs.tz(
        `${this.date.format("YYYY-MM-DD")} 05:00`,
        "Asia/Bangkok"
      );
    },
    setDepartureEnd() {
      this.departureEnd = dayjs.tz(
        `${this.date.add(1, "days").format("YYYY-MM-DD")} 17:00`,
        "Asia/Bangkok"
      );
    },
  },
});
