<script setup lang="ts">
import type { Token } from "~/types/token";

const { invoice, createOrder, charge } = usePaymentForm();
const { openPayment } = useOmise();

const open = ref<boolean>(false);

const state = ref<{
  status: "process" | "success" | "500";
  title: string;
  subTitle: string;
}>({
  status: "process",
  title: "Processing...",
  subTitle: "Your order is being processed, please wait a moment.",
});

const goHome = () => {
  navigateTo("/");
};

const processCharge = async (token: Token) => {
  open.value = true;
  charge({
    ...token,
    invoiceNumber: invoice?.value?.invoiceNumber ?? "",
  })
    .then((res) => {
      open.value = false;
      state.value = {
        status: "success",
        title: "The payment has been completed.",
        subTitle: res.message,
      };
    })
    .catch((err) => {
      open.value = false;
      state.value = {
        status: "500",
        title: "Payment failed.",
        subTitle: err,
      };
    });
};

const openPaymentDialog = () => {
  if (invoice?.value) {
    openPayment(invoice.value)
      .then((token) => {
        processCharge(token);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

onMounted(async () => {
  createOrder()
    .then((res) => {
      state.value = {
        status: "process",
        title: "Your order is ready.",
        subTitle: `Invoice number: ${res.invoiceNumber} has been paid. Let's start again.`,
      };
      openPaymentDialog();
    })
    .catch((err) => {
      state.value = {
        status: "500",
        title: "I'm sorry, there was an error.",
        subTitle: `${err}`,
      };
    });
});
</script>

<template>
  <div>
    <Loading :open="open" />
    <div class="flex gap-4 justify-center items-center">
      <a-result
        :status="state.status"
        :title="state.title"
        :sub-title="state.subTitle"
      >
        <template v-if="state.status === 'process'" #icon>
          <a-spin></a-spin>
        </template>
        <template #extra>
          <a-button key="console" @click="goHome">Go Home</a-button>
          <a-button
            key="buy"
            v-if="state.status === 'process'"
            @click="openPaymentDialog"
            type="primary"
            >Try again</a-button
          >
        </template>
      </a-result>
    </div>
  </div>
</template>
