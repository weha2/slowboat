<script setup lang="ts">
import dayjs, { Dayjs } from "dayjs";
import { useDateStore } from "~/stores/dateStore";

const { format } = useDepartureDate();
const dateStore = useDateStore();
const product = useProductStore();
const date = ref<Dayjs>(dateStore.getCurrentDate());

const departureDate = ref<string>();

watch(date, (newDate) => {
  dateStore.setDate(newDate);
  departureDate.value = format(date.value, product?.product);
});

onMounted(() => {
  departureDate.value = format(date.value, product?.product);
});
</script>
<template>
  <div>
    <div>
      <div
        class="text-md font-thin flex sm:flex-row flex-col items-start gap-2 sm:items-center"
      >
        Departure Date :
        <p class="font-semibold sm:text-xl text-lg">
          {{ departureDate }}
        </p>
      </div>
      <a-calendar
        v-model:value="date"
        :defaultValue="date"
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
