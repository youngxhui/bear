import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './index/course.component';
import { ProfileComponent } from './profile/profile.component';
import {AddComponent} from './add/add.component';


const routes: Routes = [
  {path: '', component: CourseComponent},
  {path: ':id', component: CourseComponent},
  {path: 'add', component: AddComponent},
  {path: 'profile/:id', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
}
