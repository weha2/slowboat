export default defineNuxtPlugin(() => {
  const formatCurrency = (
    amount: number,
    currency = "THB",
    locale = "th-TH"
  ) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return {
    provide: {
      currency: formatCurrency,
    },
  };
});
