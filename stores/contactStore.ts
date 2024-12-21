import type { FormInstance } from "ant-design-vue";
import type { Contact } from "~/types/contact";

export const useContactStore = defineStore("contact", {
  state: () => ({
    formRef: null as FormInstance | null,
    formData: {
      lastname: "",
      firstname: "",
      email: "",
      countryCodeId: 1,
      phoneNumber: "",
    },
  }),
  actions: {
    initFormRef(ref: FormInstance) {
      this.formRef = ref;
    },
    updateFields(value: Contact) {
      this.formData = value;
    },
  },
});
