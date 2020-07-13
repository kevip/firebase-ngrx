import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICustomer } from '../../interfaces/customer.interface';

import { Routers } from '../../config/routers.enum';


@Component({
  selector: 'cl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

    customers$: Observable<ICustomer[]>;
    ageList: number[];

    constructor(
      private firestore: AngularFirestore,
      private router: Router) { }

    ngOnInit(): void {
      this.customers$ = this.firestore.collection<ICustomer>('customers').valueChanges()
        .pipe(map(res => {
          this.ageList = res.map(customer => customer.age);
          return res;
        }));
    }

    linkToNewCustomer(): void {
      this.router.navigate([Routers.NEW_CUSTOMER]);
    }
}
