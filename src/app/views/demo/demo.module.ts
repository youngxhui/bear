import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, TagCloudModule],
  exports: [DemoComponent],
})
export class DemoModule {}
