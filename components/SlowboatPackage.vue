<script setup lang="ts">
const details = [
  "5.00-5.30 am pick up from hotel in chiangrai go to Chiang Khong.",
  "Take 2 hrs arrive  at Thailand  border done immigration stamp.",
  "Crosing  to Laos border  by bus.Done immigration  visa ( Our team will be there for help you for apply  visa on arrival) than  we take you go to our office  in Huay Xi you can buy sim card some snacks  or exchange  money  for Laos 🇱🇦  keep .At Huay Xai office  our team will explain  you again and you can get lunch box what we provide for  you free  and  what you can eat vegetarian or anything  you can oder there.",
  "9.00 we take you to slow boat pier  than slow boat leave from Huay  Xai  to pakbeng.",
  "4.00-5.00pm arrive  at pakbeng  stay over night there.",
  "8.00.8.30 am you have to back to same area  slowboat",
  "9.00 am  slow boat leave from pakbeng",
  "3.00-4.00pm arrive  at Luangprabang",
];
</script>
<template>
  <a-card hoverable>
    <div>
      <p class="text-2xl font-semibold">⛵️ Slow boat</p>
      <p class="font-thin">฿1,700.00 / person</p>
    </div>

    <NuxtLink to="/booking/1">
      <a-button
        size="large"
        type="primary"
        shape="round"
        class="my-1 w-full"
        >BOOK NOW</a-button
      >
    </NuxtLink>

    <ul class="text-sm">
      <li v-for="(detail, index) in details" :key="index">
        <i class="pi pi-check"></i> {{ detail }}
      </li>
    </ul>
    <div class="my-4">
      <p class="text-sm font-semibold">Trip 2 days 1 night</p>
      <p class="text-sm">the price is 1,700.00 / person</p>
      <div class="my-2">
        <p class="text-sm text-primary font-bold">Include</p>
        <p class="text-sm">
          🛏️ Pick up transfer from hotel in Chiangrai to Chiang Khong border
        </p>
        <ul class="text-sm">
          <li><i class="pi pi-check"></i> Bus ticket Crosing to Laos border</li>
          <li><i class="pi pi-check"></i> Slowboat ticket till Luangprabang</li>
          <li><i class="pi pi-check"></i> Lunch box</li>
        </ul>
      </div>
      <div class="my-2">
        <p class="text-sm text-red-600 font-bold">Not Include</p>
        <ul class="text-sm">
          <li>
            <i class="pi pi-times"></i> Visa 40 Dollars -Accommodation at
            Pakbeng
          </li>
        </ul>
      </div>
    </div>
  </a-card>
</template>
