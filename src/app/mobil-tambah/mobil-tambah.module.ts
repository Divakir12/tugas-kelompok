import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilTambahPageRoutingModule } from './mobil-tambah-routing.module';

import { MobilTambahPage } from './mobil-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilTambahPageRoutingModule
  ],
  declarations: [MobilTambahPage]
})
export class MobilTambahPageModule {}
