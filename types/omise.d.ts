interface OmiseCardConfiguration {
  defaultPaymentMethod: string;
  image?: string;
  frameLabel?: string;
  amount: number;
  currency: string;
  submitLabel?: string;
  buttonLabel?: string;
  onCreateTokenSuccess: (token: string) => void;
  onFormClosed?: () => void;
}

interface OmiseCard {
  configure: (config: OmiseCardConfiguration | { publicKey: string }) => void;
  open: () => void;
  destroy: () => void;
}

declare global {
  interface Window {
    OmiseCard: OmiseCard;
  }
}

export {};
