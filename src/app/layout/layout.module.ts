import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [DefaultComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, NzLayoutModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class LayoutModule {
}
