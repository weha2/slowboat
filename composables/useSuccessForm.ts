import type { LoadingState } from "~/types/loading-state";
import type { Order } from "~/types/order";

export const useSuccessForm = () => {
  const productStore = useProductStore();
  const contactStore = useContactStore();
  const dateStore = useDateStore();
  const additionalStore = useAdditionalStore();
  const participantStore = useParticipantStore();
  const order = useOrder();

  const state = reactive<LoadingState>({
    isLoading: false,
  });

  const createOrder = async () => {
    try {
      const product = productStore.product;
      const participants = participantStore.participants;
      const date = dateStore.date;
      const additionalRequest = additionalStore.additional ?? "";
      const contact = contactStore.formData;
      const body: Order = {
        productId: product?.id ?? 0,
        quantity: participants.length,
        date: date.toDate(),
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
      state.isLoading = true;
      const res = await order.create(body);
      state.isLoading = false;
      if (res.data) {
        productStore.$reset();
        contactStore.$reset();
        dateStore.$reset();
        additionalStore.$reset();
        participantStore.$reset();
      } else {
        state.errorMsg = res.error ?? "";
      }
    } catch (error) {
      state.errorMsg = `${error}`;
    }
  };

  onMounted(async () => {
    await createOrder();
  });

  return {
    state: state,
  };
};
