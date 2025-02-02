export const useDepartureDate = () => {
  const { $formatDepartureDate } = useNuxtApp();

  return {
    format: $formatDepartureDate,
  };
};
