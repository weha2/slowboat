<script setup lang="ts">
const props = defineProps<{
  current: number;
}>();

const emit = defineEmits<{
  previous: [];
  next: [];
}>();

const current = computed(() => {
  return props.current;
});
</script>
<template>
  <div
    class="flex p-2"
    v-if="current <= 1"
    :class="{
      'justify-between': current > 0,
      'justify-end': current === 0,
    }"
  >
    <a-button
      shape="round"
      size="large"
      @click="emit('previous')"
      v-if="current > 0"
    >
      <div class="flex gap-1">
        <ArrowLeftOutlined />
        <label>Previous</label>
      </div>
    </a-button>

    <a-button
      type="primary"
      shape="round"
      size="large"
      @click="emit('next')"
      v-if="current <= 1"
    >
      <div class="flex gap-1">
        <label>Next</label>
        <ArrowRightOutlined />
      </div>
    </a-button>
  </div>
</template>
