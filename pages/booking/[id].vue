<script setup lang="ts">
const route = useRoute();
const { product, current, steps, previous, next } = useBooking(
  Number(route.params.id)
);

if (!product) {
  navigateTo("/");
}

useHead({
  title: `Booking ${product?.name}`,
});
</script>

<template>
  <div>
    <a-steps
      :current="current"
      direction="horizontal"
      size="small"
      responsive
      :items="steps"
      class="px-2"
    ></a-steps>
    <div>
      <div v-if="current === 0" class="m-2">
        <BookingInfo />
      </div>
      <div v-if="current === 1" class="m-2">
        <Preview />
      </div>
      <div v-if="current === 2" class="m-2">
        <Success />
      </div>
    </div>
    <StepNavigation :current="current" @previous="previous()" @next="next()" />
  </div>
</template>
