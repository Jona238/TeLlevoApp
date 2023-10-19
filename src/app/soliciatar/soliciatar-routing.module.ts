import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliciatarPage } from './soliciatar.page';

const routes: Routes = [
  {
    path: '',
    component: SoliciatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoliciatarPageRoutingModule {}
