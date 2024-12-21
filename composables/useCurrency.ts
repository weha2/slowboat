export const useCurrency = () => {
  const { $currency } = useNuxtApp();

  return {
    format: $currency,
  };
};
