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
import { AddComponent } from './add/add.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzResultModule} from 'ng-zorro-antd/result';


@NgModule({
  declarations: [CourseComponent, ProfileComponent, InfoComponent, CommentComponent, NoteComponent, AddComponent],
  // tslint:disable-next-line:max-line-length
  imports: [CommonModule, CourseRoutingModule, SharedModule, ReactiveFormsModule, FormsModule,
    ComponentsModule, NzLayoutModule, NzCascaderModule, NzDescriptionsModule, NzResultModule],
})
export class CourseModule {
}
