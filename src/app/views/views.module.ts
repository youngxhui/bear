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

@NgModule({
  declarations: [IndexComponent, CarouselComponent],
  imports: [CommonModule,
    ViewsRoutingModule,
    SharedModule,
    LayoutModule,
    FormsModule,
    CourseModule,
    ComponentsModule],
})
export class ViewsModule {
}
