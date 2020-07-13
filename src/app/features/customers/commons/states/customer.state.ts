import { ICustomer } from '../interfaces/customer.interface';

export interface CustomerState {
  customers: ICustomer[];
}

export const initialCustomerState: CustomerState = {
  customers: []
};
