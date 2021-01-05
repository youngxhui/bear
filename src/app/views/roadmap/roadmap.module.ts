import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutingModule } from './roadmap.routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule, RoadmapRoutingModule, NzLayoutModule, NgxEchartsModule
  ]
})
export class RoadmapModule {
}
