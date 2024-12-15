export const usePreviewForm = () => {
  const { product } = useProductStore();
  const { formattedDepartureDate } = useDateStore();
  const countryStore = useCountryStore();
  const contactStore = useContactStore();
  const participantStore = useParticipantStore();

  const participant = participantStore.totalParticipants;
  const contact = contactStore.formData;
  const dialCode =
    countryStore.countryCodes.find((x) => x.id === contact.countryCodeId)
      ?.dialCode || "";

  return {
    product,
    formattedDepartureDate,
    participant,
    contact,
    dialCode,
  };
};
