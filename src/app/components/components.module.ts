import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CourseCardComponent],
  exports: [
    CourseCardComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule
  ]
})
export class ComponentsModule {
}
