import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilEditPage } from './mobil-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MobilEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilEditPageRoutingModule {}
