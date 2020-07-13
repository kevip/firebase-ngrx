import { Component, Input } from '@angular/core';

@Component({
    selector: 'cl-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {
  
  @Input()
  status: string;
  @Input()
  message: string;

}
