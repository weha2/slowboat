import { useContactStore } from "~/stores/contactStore";
import { useParticipantStore } from "~/stores/participantStore";
import { useProductStore } from "~/stores/productStore";

export const useBookingForm = async (id: number) => {
  const productStore = useProductStore();
  const contactStore = useContactStore();
  const participantStore = useParticipantStore();
  const { getProduct } = useProduct();

  const current = ref<number>(0);

  const res = await getProduct(id);

  if (res.data) {
    productStore.init(res.data);
  } else {
    navigateTo("/");
  }

  const steps = [
    {
      title: "Information",
    },
    {
      title: "Preview",
    },
    {
      title: "Success",
    },
  ];

  const previous = () => {
    current.value -= 1;
  };

  const next = async () => {
    try {
      if (current.value === 0) {
        await contactStore.formRef?.validate();
        await participantStore.formRef?.validate();
      }
      if (current.value >= 2) {
        current.value = 2;
      } else {
        current.value += 1;
      }
    } catch (err) {}
  };

  return {
    product: productStore.product,
    current,
    steps,
    previous,
    next,
  };
};
