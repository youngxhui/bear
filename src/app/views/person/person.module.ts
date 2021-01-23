import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonComponent} from './person.component';
import {PersonRoutingModule} from './person.routing.module';
import {SharedModule} from '../../shared/shared.module';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
    NzPageHeaderModule,
    NzTypographyModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule
  ]
})
export class PersonModule {
}
