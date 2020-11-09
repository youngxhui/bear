import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
    NzPageHeaderModule,
    NzTypographyModule
  ]
})
export class PersonModule {
}
