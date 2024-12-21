<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  message?: string;
}>();

const open = computed(() => {
  return props.open;
});
const message = computed(() => {
  return props.message;
});
</script>
<template>
  <a-modal
    v-model:open="open"
    :closable="false"
    :centered="true"
    :footer="null"
    :confirm-loading="open"
    :width="350"
  >
    <div class="flex flex-col gap-4 items-center">
      <a-spin size="large" />
      <p class="text-xl">{{ message || "Processing..." }}</p>
    </div>
  </a-modal>
</template>
