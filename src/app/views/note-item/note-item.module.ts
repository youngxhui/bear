import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteItemRoutingModule } from './note-item-routing.module';
import { NoteItemComponent } from './note-item/note-item.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {ComponentsModule} from '../../components/components.module';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {SharedModule} from '../../shared/shared.module';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzResultModule} from "ng-zorro-antd/result";
import {FormsModule} from "@angular/forms";
import { NoteDetailComponent } from './note-detail/note-detail.component';
import {MarkdownModule} from "ngx-markdown";


@NgModule({
  declarations: [NoteItemComponent, NoteDetailComponent],
  imports: [
    CommonModule,
    NoteItemRoutingModule,
    NzLayoutModule,
    ComponentsModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzModalModule,
    SharedModule,
    NzResultModule,
    FormsModule,
    MarkdownModule
  ]
})
export class NoteItemModule { }
