export const usePreviewForm = () => {
  const { format } = useDepartureDate();
  const { product } = useProductStore();
  const { date } = useDateStore();
  const countryStore = useCountryStore();
  const contactStore = useContactStore();
  const participantStore = useParticipantStore();
  const otherStore = useAdditionalStore();

  const participant = participantStore.totalParticipants;
  const contact = contactStore.formData;
  const dialCode =
    countryStore.countryCodes.find((x) => x.id === contact.countryCodeId)
      ?.dialCode || "";

  const formattedDepartureDate = format(date, product);

  return {
    product,
    formattedDepartureDate,
    participant,
    contact,
    dialCode,
    pickupLocation: otherStore.pickupLocation ?? "-",
    additionalRequest: otherStore.additionalRequest ?? "-",
  };
};
