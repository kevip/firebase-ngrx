import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomer from './customer/customer.reducer';
import * as fromRegisterUI from './ui/register.ui';
import { CustomerState } from '../states/customer.state';
import { RegisterUIState} from '../states/register.ui.state';

export interface State {
  customer: CustomerState;
  registerUI: RegisterUIState;
}

export const reducers: ActionReducerMap<State> = {
  customer: fromCustomer.customerReducer,
  registerUI: fromRegisterUI.registerUIReducer
};

export const getCustomerState = createFeatureSelector<CustomerState>('customer');
export const getCustomer = createSelector(getCustomerState, fromCustomer.getCustomers);

export const getRegisterUIState = createFeatureSelector<RegisterUIState>('registerUI');
export const getLoading = createSelector(getRegisterUIState, fromRegisterUI.getLoading);
export const getSuccessSubmit = createSelector(getRegisterUIState, fromRegisterUI.getSuccessSubmit);
export const getSubmitError = createSelector(getRegisterUIState, fromRegisterUI.getSubmitError);
