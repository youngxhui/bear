import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteItemComponent} from './note-item/note-item.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';

const routes: Routes = [
  {path : 'detail', component : NoteDetailComponent},
  {path : ':id', component : NoteItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteItemRoutingModule { }
