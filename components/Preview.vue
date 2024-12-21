<script setup lang="ts">
const { format } = useCurrency();
const {
  product,
  formattedDepartureDate,
  participant,
  contact,
  dialCode,
  pickupLocation,
  additionalRequest,
} = usePreviewForm();
</script>
<template>
  <a-card :bordered="false">
    <p class="text-xl font-bold text-primary">Order Detail</p>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Product</p>
      <p class="text-lg">{{ product?.name || "-" }}</p>
    </div>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Departure Date</p>
      <p class="text-lg">{{ formattedDepartureDate }}</p>
    </div>
    <a-divider />
    <div class="flex justify-between items-end">
      <div>
        <p class="text-sm font-thin">Quantity</p>
        <p class="text-lg">
          Participant - {{ format(product?.price || 0) }} x
          {{ participant }}
        </p>
      </div>
      <p class="text-lg">
        {{ format((product?.price ?? 0) * participant) }}
      </p>
    </div>
    <a-divider />
    <div class="flex flex-col">
      <div class="flex gap-4 justify-end">
        <p class="text-lg font-thin">Subtotal</p>
        <p class="text-lg">
          {{ format((product?.price ?? 0) * participant) }}
        </p>
      </div>
      <div class="my-2"></div>
      <div class="flex gap-4 justify-end">
        <p class="text-lg font-thin">Checkout Amount</p>
        <p class="text-lg">
          {{ format((product?.price ?? 0) * participant) }}
        </p>
      </div>
    </div>
    <a-divider />
    <div class="flex gap-4 justify-end">
      <p class="text-lg font-thin">Total</p>
      <p class="text-lg">
        {{ format((product?.price ?? 0) * participant) }}
      </p>
    </div>
  </a-card>
  <div class="my-4"></div>
  <a-card :bordered="false">
    <p class="text-xl font-bold text-primary">Payment Info</p>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Payment Type</p>
      <p class="text-lg">Credit Card</p>
    </div>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Amount</p>
      <div class="text-lg flex gap-2">
        {{ format((product?.price ?? 0) * participant) }}
        <p class="font-thin">(Full amount)</p>
      </div>
    </div>
  </a-card>
  <div class="my-4"></div>
  <a-card :bordered="false">
    <p class="text-xl font-bold text-primary">Contact Info</p>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Last Name</p>
      <p class="text-lg">
        {{ contact.lastname || "-" }}
      </p>
    </div>
    <a-divider />
    <div>
      <p class="text-sm font-thin">First Name</p>
      <p class="text-lg">
        {{ contact.firstname || "-" }}
      </p>
    </div>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Email</p>
      {{ contact.lastname || "-" }}
    </div>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Mobile</p>
      <p class="text-lg">
        {{ dialCode || "-" }}
        {{ contact.phoneNumber || "-" }}
      </p>
    </div>
  </a-card>
  <a-card :bordered="false">
    <p class="text-xl font-bold text-primary">Other</p>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Pickup Location</p>
      <p class="text-lg">
        {{ pickupLocation || "-" }}
      </p>
    </div>
    <a-divider />
    <div>
      <p class="text-sm font-thin">Addtional Request</p>
      <p class="text-lg">
        {{ additionalRequest || "-" }}
      </p>
    </div>
  </a-card>
</template>
