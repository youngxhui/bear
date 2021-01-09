import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutingModule } from './roadmap.routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NgxEchartsModule} from 'ngx-echarts';
import {MarkdownModule} from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule, RoadmapRoutingModule, NzLayoutModule, NgxEchartsModule, MarkdownModule.forChild(), FormsModule, ComponentsModule
  ]
})
export class RoadmapModule {
}
