export interface Invoice {
  invoiceNumber: string;
  defaultPaymentMethod: string;
  frameLabel: string;
  amount: number;
  currency: string;
}