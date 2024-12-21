import type { Invoice } from "~/types/invoice";

export const useOmise = () => {
  const openPayment = async (
    body: Invoice
  ): Promise<{ token: string; amount: number }> => {
    return new Promise(async (resolve, reject) => {
      if (!window.OmiseCard) {
        reject("Omise undified");
      }

      const configuration = {
        defaultPaymentMethod: body.defaultPaymentMethod,
        frameLabel: body.frameLabel,
        amount: body.amount,
        currency: body.currency,
        onCreateTokenSuccess: async (token: string) => {
          resolve({ token, amount: body.amount });
        },
        onFormClosed: () => {
          reject("Close dialog");
        },
      };

      window.OmiseCard.configure(configuration);
      window.OmiseCard.open();
    });
  };

  return {
    openPayment,
  };
};
