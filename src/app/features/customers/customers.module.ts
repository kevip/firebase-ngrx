import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './commons/reducers/reducers';
/**
 * COMPONENTS
 */
import { CustomersComponent } from './customers.component';
import { CustomerListView } from './views/customers-list/customer-list.view';
import { NewCustomerView } from './views/new-customer/new-customer.view';
/**
 * MODULES
 */
import { CustomersRoutingModule } from './customers-routing.module';
import { CommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListView,
    NewCustomerView
  ],
  imports: [
    CommonsModule.forRoot(),
    CustomersRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule { }
