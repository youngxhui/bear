import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { IndexComponent } from './index/index.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { CourseModule } from './course/course.module';
import { ComponentsModule } from '../components/components.module';
import { RoadmapModule } from './roadmap/roadmap.module';
import { Page404Component } from './page404/page404.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { Page403Component } from './page403/page403.component';

@NgModule({
  declarations: [IndexComponent, CarouselComponent, Page404Component, Page403Component],
  imports: [CommonModule,
    ViewsRoutingModule,
    SharedModule,
    LayoutModule,
    FormsModule,
    CourseModule,
    RoadmapModule,
    NzResultModule,
    ComponentsModule],
})
export class ViewsModule {
}
