<script setup lang="ts">
const { format } = useCurrency();
const details = [
  "5.00-5.30 am Pickup  from your hotel in chiangrai  takes 2 hrs to arrived  at  Chiangkhong  Thai border. Then our driver will put a stickers of our company  name on you  and take a photo of your group for sending to Laos team. Than you all group walk to immigration  for get exit  stamp from Thailand  and  backside immigration  will have bus for Crosing  to Laos border  just 5 minutes  our team will waiting  you for service  and help ypu apply  for  Laos visa need 1 photo and  ( 40 USD ) you can pay by Thai B but they will change you more for currency  exchange  and  at Laos border everyone  must to pay for the sticker visa 20 TB. Than after we bring you to our office  in Huayxai  for buy some snacks  sim card and we give you lunch box free .",
  "9.00 am The van will come to pick up you  go to Nateuy  Station  🚉  you will arrive  st Station  around  2.30-3.00 pm. Than",
  "3.30-4.00 pm Train leave from station  go to Luangprabang around  6.00-6.30 pm same day.",
];
</script>
<template>
  <a-card hoverable>
    <div>
      <p class="text-2xl font-semibold">🚝 Train</p>
      <p class="font-thin">{{ format(1990) }} / person</p>
    </div>

    <NuxtLink to="/booking/3">
      <a-button
        type="primary"
        size="large"
        shape="round"
        class="my-1 w-full bg-train"
        >BOOK NOW</a-button
      >
    </NuxtLink>

    <p class="text-sm">You will be same day at Luangprabang</p>
    <ul class="text-sm">
      <li v-for="(detail, index) in details" :key="index">
        <i class="pi pi-check"></i> {{ detail }}
      </li>
    </ul>
    <div class="my-4">
      <p class="text-sm">the price is 1,990.00 / person</p>
      <div class="my-2">
        <p class="text-sm text-primary font-bold">Include</p>
        <ul class="text-sm">
          <li>
            <i class="pi pi-check"></i> Transfer from your hotel in Chiangrai to
            Chiangkhong Thai border.
          </li>
          <li>
            <i class="pi pi-check"></i> Bus ticket Crosing to Laos border.
          </li>
          <li><i class="pi pi-check"></i> Taxi go to our office in Huayxai</li>
          <li>
            <i class="pi pi-check"></i> Air van from Huayxai to Nateuy Station
          </li>
          <li><i class="pi pi-check"></i> Train ticket to Luangprabang</li>
          <li><i class="pi pi-check"></i> Lunch box and drinking water.</li>
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
