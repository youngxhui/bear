import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from '../layout/default/default.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from '../layout/login/login.component';
import {Page404Component} from './page404/page404.component';
import {RegisterComponent} from '../layout/register/register.component';
import {AuthGuard} from '../guard/auth.guard';
import {Page403Component} from './page403/page403.component';

const routes: Routes = [{
  path: '', component: DefaultComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
    {path: 'roadmap', loadChildren: () => import('./roadmap/roadmap.module').then(m => m.RoadmapModule)},
    {path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule)},
  ]
},
  {
    path: 'login', component: LoginComponent
  },
  {path: 'register', component: RegisterComponent},
  {path: '403', component: Page403Component},
  {path: '**', component: Page404Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {
}
