<script setup lang="ts">
import dayjs, { Dayjs } from "dayjs";
import { useDateStore } from "~/store/dateStore";

const dateStore = useDateStore();
const departureDate = ref<Dayjs>(dateStore.getCurrentDate());

watch(departureDate, (newDepartureDate) => {
  dateStore.setDate(newDepartureDate);
});

const formattedDepartureDate = computed(() => dateStore.formattedDepartureDate);
</script>
<template>
  <div>
    <div>
      <div
        class="text-md font-thin flex sm:flex-row flex-col items-start gap-2 sm:items-center"
      >
        Departure Date :
        <p class="font-semibold sm:text-xl text-lg">
          {{ formattedDepartureDate }}
        </p>
      </div>
      <a-calendar
        v-model:value="departureDate"
        :defaultValue="departureDate"
        :fullscreen="false"
        :validRange="[dayjs().add(-1, 'days'), dayjs().add(1, 'year')]"
      />
    </div>
    <a-divider />
    <div>
      <p class="text-md font-thin">Status</p>
      <p class="text-2xl font-bold text-primary">Available</p>
    </div>
  </div>
</template>
