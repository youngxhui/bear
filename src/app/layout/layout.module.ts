import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DefaultComponent, LoginComponent],
  imports: [CommonModule, SharedModule, NzLayoutModule, RouterModule, ReactiveFormsModule],
})
export class LayoutModule {
}
