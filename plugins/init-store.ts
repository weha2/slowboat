export default defineNuxtPlugin(async () => {
  const store = useCountryStore();
  await store.init();
});
