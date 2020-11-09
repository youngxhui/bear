import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RateComponent } from './rate/rate.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [CourseCardComponent, RateComponent, CommentComponent],
  exports: [
    CourseCardComponent,
    RateComponent,
    CommentComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule
  ]
})
export class ComponentsModule {
}
