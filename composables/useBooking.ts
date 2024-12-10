import { useContactStore } from "~/store/contactStore";
import { useParticipantStore } from "~/store/participantStore";
import { useProductStore } from "~/store/productStore";
import type { Product } from "~/types/product";

export const useBooking = (id: number) => {
  const productStore = useProductStore();
  const contactStore = useContactStore();
  const participantStore = useParticipantStore();

  const current = ref<number>(0);

  const products = new Map<number, Product>();

  products.set(1, {
    name: "⛵️ Slow boat",
    price: 1700,
  });
  products.set(2, {
    name: "🚃 Bus",
    price: 1600,
  });
  products.set(3, {
    name: "🚝 Train",
    price: 1990,
  });

  const product = products.get(Number(id));

  if (product) {
    productStore.setProduct(product);
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
    product,
    current,
    steps,
    previous,
    next,
  };
};
