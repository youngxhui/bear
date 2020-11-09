import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './index/course.component';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { CommentComponent } from './profile/comment/comment.component';
import { NoteComponent } from './profile/note/note.component';


@NgModule({
  declarations: [CourseComponent, ProfileComponent, InfoComponent, CommentComponent, NoteComponent],
  imports: [CommonModule, CourseRoutingModule, SharedModule, ReactiveFormsModule, FormsModule, ComponentsModule],
})
export class CourseModule {
}
