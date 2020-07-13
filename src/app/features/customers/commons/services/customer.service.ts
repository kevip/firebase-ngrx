import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { CustomerModel } from '../../models/customer/customer.model';
import { ICustomer } from '../interfaces/customer.interface';
import { Store } from '@ngrx/store';
import { State } from '../reducers/reducers';
import * as UI from '../actions/register.ui.actions';


@Injectable()
export class CustomerService {

  constructor(
    private store: Store<State>,
    private firestore: AngularFirestore) { }

  getCustomerList(): Observable<{}[]> {

    return null;
  }

  addCustomer(customer: CustomerModel): void {
    this.store.dispatch(new UI.StartLoading());
    this.firestore.collection<ICustomer>('customers').add({...customer})
      .then( () => {
        this.store.dispatch(new UI.StopSubmitError());
        this.store.dispatch(new UI.SuccessSubmit());
      })
      .catch( () => {
        this.store.dispatch(new UI.StopSuccessSubmit());
        this.store.dispatch(new UI.SubmitError());
      })
      .finally( () => {
      this.store.dispatch(new UI.StopLoading());
    });
  }

}
