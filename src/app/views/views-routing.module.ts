import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../layout/default/default.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from '../layout/login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [{
  path: '', component: DefaultComponent, children: [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
    {path: 'roadmap', loadChildren: () => import('./roadmap/roadmap.module').then(m => m.RoadmapModule)},
  ]
},
  {
    path: 'login', component: LoginComponent
  },
  {path: '**', component: Page404Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {
}
