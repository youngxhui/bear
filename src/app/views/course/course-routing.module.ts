import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './index/course.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: '', component: CourseComponent},
  {path: ':id', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
}
