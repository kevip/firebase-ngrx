import { CustomerActions, CREATE_CUSTOMER, LIST_CUSTOMERS } from '../../actions/customer.actions';
import { initialCustomerState, CustomerState } from '../../states/customer.state';

// tslint:disable-next-line: typedef
export function customerReducer(state = initialCustomerState, action: CustomerActions) {
  switch (action.type) {
    case CREATE_CUSTOMER:
      return {
        ...state
      };
    case LIST_CUSTOMERS:
      return {
        ...state
      };
    default: {
      return state;
    }
  }
}

export const getCustomers = (state: CustomerState) => state.customers;
