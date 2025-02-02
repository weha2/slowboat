// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@ant-design-vue/nuxt", "@pinia/nuxt"],
  antd: {
    extractStyle: true,
  },
  runtimeConfig: {
    omiseSecretKey: process.env.OMISE_SECRET_KEY,
    public: {
      apiBase: process.env.API_BASE_URL,
      omisePublicKey: process.env.OMISE_PUBLIC_KEY,
      TZ: process.env.TZ,
    },
  },
});
