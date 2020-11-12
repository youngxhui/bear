import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthChildGuard } from './guard/auth-child.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
