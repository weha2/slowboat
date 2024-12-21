<script setup lang="ts">
import { useAdditionalStore } from "~/stores/additionalStore";

const additionalStore = useAdditionalStore();
const additionalRequest = ref<string>(additionalStore.additionalRequest ?? "");
const pickupLocation = ref<string>(additionalStore.pickupLocation ?? "");

watch(additionalRequest, (value) => {
  additionalStore.updateAdditionalRequest(value);
});

watch(pickupLocation, (value) => {
  additionalStore.updatePickupLocation(value);
});
</script>

<template>
  <div>
    <p class="text-2xl font-bold">📍 Pickup Location</p>
    <div class="my-4"></div>
    <a-textarea
      v-model:value="pickupLocation"
      show-count
      :rows="4"
      :maxlength="100"
      placeholder="Please fill pickup location."
    />
  </div>
  <div class="my-4"></div>
  <div>
    <p class="text-2xl font-bold">📝 Additional Request</p>
    <div class="my-4"></div>
    <a-textarea
      v-model:value="additionalRequest"
      show-count
      :rows="4"
      :maxlength="100"
      placeholder="Please fill in the requests or remarks."
    />
  </div>
</template>
