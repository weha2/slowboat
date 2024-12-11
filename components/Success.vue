<script setup lang="ts">
const { state } = useSuccessForm();

const isLoading = computed(() => {
  return state.isLoading;
});

const error = computed(() => {
  return state.errorMsg;
});
</script>
<template>
  <div
    v-if="isLoading && !error"
    class="flex flex-col gap-4 justify-center items-center h-96"
  >
    <a-spin size="large" />
    <p class="text-xs">System is directing you to the payment page....</p>
  </div>
  <a-result v-if="error" status="error" title="An error has occurred." :sub-title="error">
  </a-result>
</template>
