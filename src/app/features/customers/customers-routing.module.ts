import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerView } from './views/new-customer/new-customer.view';
import { CustomerListView } from './views/customers-list/customer-list.view';

const routes: Routes = [
  {
    path: 'new-customer',
    component: NewCustomerView
  },
  {
    path: 'customer-list',
    component: CustomerListView
  },
  {
    path: '',
    redirectTo: 'customer-list',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
