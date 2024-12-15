import type { FormInstance } from "ant-design-vue";
import { useContactStore } from "~/stores/contactStore";
import type { Contact } from "~/types/contact";
import type { CountryCode } from "~/types/country-code";

export const useContactForm = () => {
  const store = useContactStore();
  const countryStore = useCountryStore();

  const countryCodes = ref<CountryCode[]>(countryStore.countryCodes);
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
    countryCodes,
  };
};
