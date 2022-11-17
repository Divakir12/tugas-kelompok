import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilTambahPage } from './mobil-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: MobilTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilTambahPageRoutingModule {}
