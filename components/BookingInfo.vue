<script setup lang="ts">
import { useParticipantStore } from "~/stores/participantStore";
import { useProductStore } from "~/stores/productStore";

const { product } = useProductStore();
const participantStore = useParticipantStore();

const participant = computed(() => participantStore.participants.length);
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col sm:flex-row gap-4">
      <a-card :bordered="false" class="basis-1/3">
        <div>
          <a-statistic title="Product selected" :value="product?.name" />
          <div class="flex flex-row sm:flex-col gap-4">
            <a-statistic title="Participant" :value="participant" />
            <div class="flex gap-4">
              <a-statistic title="Price" :value="product?.price" />
              <a-statistic
                title="Amount"
                :value="participant * (product?.price || 0)"
              />
            </div>
          </div>
        </div>
      </a-card>
      <a-card :bordered="false" class="w-full">
        <Calendar />
      </a-card>
    </div>
    <div>
      <a-card :bordered="false">
        <p class="text-2xl font-bold">Contact</p>
        <Contact ref="contactFormRef" />
      </a-card>
    </div>

    <div>
      <a-card :bordered="false">
        <div class="text-2xl font-bold flex gap-4 items-center">
          Participant
          <a-tag color="#87d068" :bordered="false"
            >Total {{ participant }}</a-tag
          >
        </div>
        <Participant />
      </a-card>
    </div>

    <div>
      <a-card :bordered="false">
        <AdditionRequest />
      </a-card>
    </div>
  </div>
</template>
