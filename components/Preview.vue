<script setup lang="ts">
import { useContactStore } from "~/store/contactStore";
import { useDateStore } from "~/store/dateStore";
import { useParticipantStore } from "~/store/participantStore";
import { useProductStore } from "~/store/productStore";

const { product } = useProductStore();
const { formattedDepartureDate } = useDateStore();
const contactStore = useContactStore();
const participantStore = useParticipantStore();

const participant = participantStore.totalParticipants;
const contact = contactStore.formData;
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
          Participant - {{ product?.price || 0 }} x
          {{ participant }}
        </p>
      </div>
      <p class="text-lg">
        {{ (product?.price ?? 0) * participant }}
      </p>
    </div>
    <a-divider />
    <div class="flex flex-col">
      <div class="flex gap-4 justify-end">
        <p class="text-lg font-thin">Subtotal</p>
        <p class="text-lg">
          {{ (product?.price ?? 0) * participant }}
        </p>
      </div>
      <div class="my-2"></div>
      <div class="flex gap-4 justify-end">
        <p class="text-lg font-thin">Checkout Amount</p>
        <p class="text-lg">
          {{ (product?.price ?? 0) * participant }}
        </p>
      </div>
    </div>
    <a-divider />
    <div class="flex gap-4 justify-end">
      <p class="text-lg font-thin">Total</p>
      <p class="text-lg">
        {{ (product?.price ?? 0) * participant }}
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
        {{ (product?.price ?? 0) * participant }}
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
        {{ contact.phoneCode || "-" }}
        {{ contact.numberPhone || "-" }}
      </p>
    </div>
  </a-card>
</template>
