import type { Invoice } from "~/types/invoice";
import type { Order } from "~/types/order";

export const usePaymentForm = () => {
  const productStore = useProductStore();
  const contactStore = useContactStore();
  const dateStore = useDateStore();
  const additionalStore = useAdditionalStore();
  const participantStore = useParticipantStore();
  const order = useOrder();

  const { createCharge } = usePayment();

  const invoice = ref<Invoice>();

  const createOrder = (): Promise<Invoice> => {
    return new Promise(async (resolve, reject) => {
      try {
        const product = productStore.product;
        const participants = participantStore.participants;
        const date = dateStore.date;
        const additionalRequest = additionalStore.additionalRequest ?? "";
        const pickupLocation = additionalStore.pickupLocation ?? "";
        const contact = contactStore.formData;

        const body: Order = {
          productId: product?.id ?? 0,
          quantity: participants.length,
          date: date.toDate(),
          pickupLocation: pickupLocation,
          additionalRequest: additionalRequest,
          contact: {
            lastname: contact.lastname ?? "",
            firstname: contact.firstname ?? "",
            email: contact.email ?? "",
            countryCodeId: contact.countryCodeId,
            phoneNumber: contact.phoneNumber ?? "",
          },
          participants: participants.flatMap((participant) => ({
            lastname: participant.lastname || "",
            firstname: participant.firstname ?? "",
            email: participant.email ?? "",
            countryCodeId: participant.countryCodeId,
            phoneNumber: participant.phoneNumber ?? "",
            dateBirth: participant.dateBirth?.length
              ? new Date(participant.dateBirth)
              : undefined,
            genderId: participant.genderId,
            countryNationalityId: participant.countryNationalityId,
            passportNumber: participant.passport ?? "",
          })),
        };

        const res = await order.create(body);

        if (res.data) {
          productStore.$reset();
          contactStore.$reset();
          dateStore.$reset();
          additionalStore.$reset();
          participantStore.$reset();
          invoice.value = res.data;
          resolve(res.data);
        } else {
          reject(res.error ?? "Create order failed.");
        }
      } catch (error) {
        reject(`${error}`);
      }
    });
  };

  const charge = async (body: {
    token: string;
    invoiceNumber: string;
    amount: number;
  }): Promise<{ isSuccess: boolean; message: string }> => {
    return new Promise(async (resolve, reject) => {
      const res = await createCharge(body);
      if (res.data && res.data.invoiceNumber === body.invoiceNumber) {
        resolve({
          isSuccess: true,
          message: "The payment has been completed. We have sent a confirmation email to your inbox.",
        });
      } else {
        reject(res.error ?? "Payment failed. Please try again.");
      }
    });
  };

  return {
    invoice,
    createOrder,
    charge,
  };
};
