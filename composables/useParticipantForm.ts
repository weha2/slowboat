import type { FormInstance } from "ant-design-vue";
import { ref } from "vue";
import { useContactStore } from "~/stores/contactStore";
import { useParticipantStore } from "~/stores/participantStore";
import type { Participant } from "~/types/participant";

export const useParticipantForm = () => {
  const contactStore = useContactStore();
  const participantStore = useParticipantStore();
  const formRef = ref<FormInstance>();
  const formState = ref<{ participants: Participant[] }>({
    participants: participantStore.participants,
  });

  const addParticipant = () => {
    formState.value.participants.push({
      id: Date.now(),
      lastname: "",
      firstname: "",
      email: "",
      phoneCode: "",
      phoneNumber: "",
      dateBirth: "",
      gender: "",
      passport: "",
      nationality: "",
    });
  };

  const removeParticipant = (participant: Participant) => {
    const index = formState.value.participants.indexOf(participant);
    if (index > 0) {
      formState.value.participants.splice(index, 1);
    }
  };

  const copyContact = async () => {
    try {
      await contactStore.formRef?.validate();
      const value: Participant = {
        id: Date.now(),
        lastname: contactStore.formData.lastname,
        firstname: contactStore.formData.firstname,
        email: contactStore.formData.email,
        phoneCode: contactStore.formData.phoneCode,
        phoneNumber: contactStore.formData.phoneNumber,
        dateBirth: "",
        gender: "",
        passport: "",
        nationality: "",
      };
      formState.value.participants.shift();
      formState.value.participants.unshift(value);
    } catch (err) {}
  };

  onMounted(() => {
    if (participantStore.totalParticipants === 0) {
      addParticipant();
    }
    if (formRef.value) {
      participantStore.initFormRef(formRef.value);
    }
  });

  watch(
    formState,
    (state) => {
      participantStore.updateFields(state.participants);
    },
    { deep: true }
  );

  return {
    formRef,
    formState,
    addParticipant,
    removeParticipant,
    copyContact,
  };
};
