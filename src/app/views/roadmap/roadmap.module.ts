import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutingModule } from './roadmap.routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NgxEchartsModule} from 'ngx-echarts';
import {MarkdownModule} from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import {EditorMdDirective} from '../../editor/editor-md.directive';


@NgModule({
  declarations: [RoadmapComponent, EditorMdDirective],
  imports: [
    CommonModule, RoadmapRoutingModule, NzLayoutModule, NgxEchartsModule, MarkdownModule.forChild(), FormsModule
  ]
})
export class RoadmapModule {
}
