<script setup lang="ts">
import { useAdditionalStore } from "~/store/additionalStore";

const additionalStore = useAdditionalStore();
const additionalRequest = ref<string>(additionalStore.additional ?? "");

watch(additionalRequest, (value) => {
  if (value) {
    additionalStore.updateFields(value);
  }
});
</script>

<template>
  <p class="text-2xl font-bold">Additional Request</p>
  <div class="my-4"></div>
  <a-textarea
    v-model:value="additionalRequest"
    show-count
    :rows="4"
    :maxlength="100"
    placeholder="Please fill in the requests or remarks."
  />
</template>
