import type { FormInstance } from "ant-design-vue";
import { useContactStore } from "~/store/contactStore";
import type { Contact } from "~/types/contact";

export const useContactForm = () => {
  const store = useContactStore();
  const formRef = ref<FormInstance>();

  const formState = reactive<Contact>(store.formData);

  onMounted(() => {
    if (formRef.value) {
      store.initFormRef(formRef.value);
    }
  });

  watch(
    formState,
    (newValue) => {
      store.updateFields(newValue);
    },
    { deep: true }
  );

  return {
    formRef,
    formState,
  };
};
