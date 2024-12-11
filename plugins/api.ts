export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      "Content-Type": "application/json",
    },
    async onRequest({ request, options }) {},
  }) as <T>(...args: Parameters<typeof $fetch>) => Promise<T>;

  return {
    provide: {
      apiFetch,
    },
  };
});
