import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerService } from '../services/customer.service';

/**
 * COMPONENTS
 */
import { ListComponent } from './list/list.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AlertComponent } from './register-form/alert/alert.component';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';


const COMPONENTS = [
  AlertComponent,
  ListComponent,
  OverviewComponent,
  RegisterFormComponent
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  providers: [],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ComponentsModule,
      providers: [
        CustomerService
      ]
    };
  }
}
