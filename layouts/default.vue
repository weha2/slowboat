<script setup lang="ts"></script>
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',
        colorPrimaryHover: 'none',
        colorPrimaryActive: 'none',
      },
    }"
  >
    <div class="container sm:mx-auto">
      <header class="sm:p-0 p-2">
        <SlowboatHeader />
      </header>
      <NuxtPage />
      <footer
        class="my-8 flex sm:flex-row flex-col items-center justify-between"
      >
        <p class="font-thin">Created by 👨🏻‍💻 Weha Kriadchaingam</p>
        <p class="text-gray-400 font-thin text-center">
          2024 Slowboat | All rights reserved
        </p>
      </footer>
    </div>
  </a-config-provider>
</template>
