import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilPage } from './mobil.page';

const routes: Routes = [
  {
    path: '',
    component: MobilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilPageRoutingModule {}
