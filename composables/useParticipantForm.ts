import type { FormInstance } from "ant-design-vue";
import { ref } from "vue";
import { useContactStore } from "~/stores/contactStore";
import { useParticipantStore } from "~/stores/participantStore";
import type { CountryCode } from "~/types/country-code";
import type { CountryNationality } from "~/types/country-nationality";
import type { Gender } from "~/types/gender";
import type { Participant } from "~/types/participant";

export const useParticipantForm = () => {
  const contactStore = useContactStore();
  const participantStore = useParticipantStore();
  const countryStore = useCountryStore();
  const { getGenders } = useGender();

  const countryCodes = ref<CountryCode[]>(countryStore.countryCodes);
  const countryNationalities = ref<CountryNationality[]>(
    countryStore.countryNationalities
  );
  const genders = ref<Gender[]>([]);
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
      countryCodeId: 1274,
      phoneNumber: "",
      dateBirth: "",
      genderId: 1,
      passport: "",
      countryNationalityId: 470,
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
        countryCodeId: contactStore.formData.countryCodeId,
        phoneNumber: contactStore.formData.phoneNumber,
        dateBirth: "",
        genderId: 1,
        passport: "",
        countryNationalityId: 470,
      };
      formState.value.participants.shift();
      formState.value.participants.unshift(value);
    } catch (err) {}
  };

  const initGenders = async () => {
    const res = await getGenders();
    if (res.data) {
      genders.value = res.data;
    }
  };

  onMounted(async () => {
    if (participantStore.totalParticipants === 0) {
      addParticipant();
    }
    if (formRef.value) {
      participantStore.initFormRef(formRef.value);
    }
    await initGenders();
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
    genders,
    countryCodes,
    countryNationalities,
    addParticipant,
    removeParticipant,
    copyContact,
  };
};
