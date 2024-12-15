export interface Order {
  orderId?: number;
  productId: number;
  price?: number;
  quantity: number;
  date: Date;
  pickupLocation: string,
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
  countryCodeId: number;
  phoneNumber: string;
}

export interface Participant {
  id?: number;
  lastname?: string;
  firstname?: string;
  email?: string;
  countryCodeId?: number;
  phoneNumber?: string;
  dateBirth?: Date;
  genderId?: number;
  countryNationalityId?: number;
  passportNumber?: string;
}
