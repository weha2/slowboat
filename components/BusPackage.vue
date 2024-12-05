<script setup lang="ts">
const details = [
  "5.00-5.30 am pick up from hotel in chiangrai go to Chiang Khong.",
  "Take 2 hrs arrive  at Thailand  border done immigration stamp.",
  "Crosing  to Laos border  by bus.Done immigration  visa ( Our team will be there for help you for apply  visa on arrival) than  we take you go to our office  in Huay Xai you can buy sim card some snacks  or exchange  money  for Laos 🇱🇦  keep .At Huay Xai office  our team will explain  you again and you can get lunch box what we provide for  you free  and  what you can eat vegetarian   or anything  you can oder there.",
  "13.00 pm we take you to Bus station  and bus leave from Huay  Xai  to pakbeng.",
  "2.00-3.00 am next day you will arrive  at Luangprabang",
];
</script>
<template>
  <a-card hoverable>
    <div>
      <p class="text-2xl font-semibold">🚃 Bus</p>
      <p class="font-thin">฿1,600.00 / person</p>
    </div>

    <NuxtLink to="/booking/2">
      <a-button
        type="primary"
        size="large"
        shape="round"
        class="my-1 w-full bg-bus"
        >BOOK NOW</a-button
      >
    </NuxtLink>

    <ul class="text-sm">
      <li v-for="(detail, index) in details" :key="index">
        <i class="pi pi-check"></i> {{ detail }}
      </li>
    </ul>
    <div class="my-4">
      <p class="text-sm">
        the time may have not correct deppen on situation. and the road it's not
        same Thailand this make the bus can't go faster . the seat is sleeping
        seat.
      </p>
    </div>
    <div class="my-4">
      <p class="text-sm">the price is 1,600.00 / person</p>
      <div class="my-2">
        <p class="text-sm text-primary font-bold">Include</p>
        <p class="text-sm">
          🛏️ Pick up transfer from hotel in Chiangrai to Chiang Khong border
        </p>
        <ul class="text-sm">
          <li><i class="pi pi-check"></i> Bus ticket Crosing to Laos border</li>
          <li><i class="pi pi-check"></i> Taxi to bus station</li>
          <li><i class="pi pi-check"></i> Bus ticket to Luangprabang</li>
          <li><i class="pi pi-check"></i> Lunch box</li>
        </ul>
      </div>
      <div class="my-2">
        <p class="text-sm text-red-600 font-bold">Not Include</p>
        <ul class="text-sm">
          <li><i class="pi pi-times"></i> Visa 40 dollars</li>
        </ul>
      </div>
    </div>
  </a-card>
</template>
