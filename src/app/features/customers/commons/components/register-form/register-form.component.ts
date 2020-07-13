import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/reducers';

import { CustomerService } from '../../services/customer.service';

import * as reducer from '../../reducers/reducers';
import { CustomerModel } from '../../../models/customer/customer.model';

import { ErrorMessages, SuccessMessages } from '../../config/messages.enum';
import { Router } from '@angular/router';
import { Routers } from '../../config/routers.enum';

@Component({
  selector: 'cl-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {

  public isLoading$: Observable<boolean>;
  public showSuccessAlert$: Observable<boolean>;
  public showErrorAlert$: Observable<boolean>;
  public errorMessage = ErrorMessages.SUBMIT_ERROR;
  public successMessage = SuccessMessages.SUCCESS_SUBMIT;

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required])
  });

  constructor(
    private formatter: NgbDateParserFormatter,
    private customerService: CustomerService,
    private router: Router,
    private store: Store<State>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(reducer.getLoading);
    this.showSuccessAlert$ = this.store.select(reducer.getSuccessSubmit);
    this.showErrorAlert$ = this.store.select(reducer.getSubmitError);
  }

  submit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const date = this.registerForm.controls.dob.value;
      const customer = new CustomerModel({
        firstName: this.registerForm.controls.firstName.value,
        lastName: this.registerForm.controls.lastName.value,
        dob: this.formatter.format(date),
      });
      this.customerService.addCustomer(customer);
    }
  }
  linkToCustomerList(): void {
    this.router.navigate([Routers.CUSTOMER_LIST]);
  }
}
