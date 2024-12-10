import type { FormInstance } from "ant-design-vue";
import type { Participant } from "~/types/participant";

export const useParticipantStore = defineStore("participant", {
  state: () => ({
    formRef: null as FormInstance | null,
    participants: [] as Participant[],
  }),
  getters: {
    totalParticipants: (state) => state.participants.length,
  },
  actions: {
    initFormRef(ref: FormInstance) {
      this.formRef = ref;
    },
    updateFields(value: Participant[]) {
      this.participants = value;
    },
  },
});
