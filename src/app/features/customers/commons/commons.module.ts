import { NgModule, ModuleWithProviders } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DateFormatterService } from './services/date-formatter.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

const MODULES = [
  ComponentsModule.forRoot(),
];

@NgModule({
    imports: [
      ...MODULES
    ],
    exports: [ComponentsModule]
})
export class CommonsModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CommonsModule,
      providers: [
        { provide: NgbDateParserFormatter, useClass: DateFormatterService }
      ]
    };
  }
}
