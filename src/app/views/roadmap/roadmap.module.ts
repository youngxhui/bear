import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutingModule } from './roadmap.routing.module';


@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule, RoadmapRoutingModule
  ]
})
export class RoadmapModule {
}
