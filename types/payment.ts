export interface PaymentResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paid: boolean;
  transaction: string;
  created_at: string;
}
