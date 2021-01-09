import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RateComponent } from './rate/rate.component';
import { CommentComponent } from './comment/comment.component';
import { EditorComponent } from './editor/editor.component';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [CourseCardComponent, RateComponent, CommentComponent, EditorComponent],
  exports: [
    CourseCardComponent,
    RateComponent,
    CommentComponent,
    EditorComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, NzCodeEditorModule, MarkdownModule
  ]
})
export class ComponentsModule {
}
