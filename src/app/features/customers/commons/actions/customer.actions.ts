import { Action } from '@ngrx/store';

export const CREATE_CUSTOMER = '[Customer] create';
export const CUSTOMER_CREATED = '[Customer] created';
export const CUSTOMER_ERROR_CREATING = '[Customer] error creating';
export const LIST_CUSTOMERS = '[Customer] list';

export class CreateCustomer implements Action {
  readonly type = CREATE_CUSTOMER;
}

export class CustomerCreated implements Action {
  readonly type = CUSTOMER_CREATED;
}

export class CustomerErrorCreating implements Action {
  readonly type = CUSTOMER_ERROR_CREATING;
}

export class ListCostumers implements Action {
  readonly type = LIST_CUSTOMERS;
}

export type CustomerActions = CreateCustomer | ListCostumers;
