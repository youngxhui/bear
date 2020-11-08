import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../layout/default/default.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from '../layout/login/login.component';

const routes: Routes = [{
  path: '', component: DefaultComponent, children: [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)}
  ]
},
  {
    path: 'login', component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {
}
