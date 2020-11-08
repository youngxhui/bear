import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, CourseRoutingModule, SharedModule, ReactiveFormsModule, FormsModule, ComponentsModule],
})
export class CourseModule {
}
