export interface Order {
  orderId?: number;
  productId: number;
  price?: number;
  quantity: number;
  date: Date;
  additionalRequest: string;
  status?: string;
  statusMessage?: string;
  completedAt?: Date;
  contact: Contact;
  participants: Participant[];
}

export interface Contact {
  lastname: string;
  firstname: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
}

export interface Participant {
  id?: number;
  lastname?: string;
  firstname?: string;
  email?: string;
  phoneCode?: string;
  phoneNumber?: string;
  dateBirth?: Date;
  gender?: string;
  nationality?: string;
  passportNumber?: string;
}
