import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FORMULAS } from './formulas';
import { formulasName } from '../../config/formulas.enum';

@Component({
  selector: 'cl-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OverviewComponent {

  standardDeviationMsg = formulasName.STANDARD_DEVIATION;
  averageMsg = formulasName.AVERAGE;

  @Input()
  ageList: number[] = [0];


  get average(): number {
    return FORMULAS.AVERAGE.next(this.ageList);
  }

  get standardDeviation(): number {
    return FORMULAS.STANDARD_DEVIATION.next(this.ageList);
  }
}
