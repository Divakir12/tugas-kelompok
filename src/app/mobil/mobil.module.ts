import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilPageRoutingModule } from './mobil-routing.module';

import { MobilPage } from './mobil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilPageRoutingModule
  ],
  declarations: [MobilPage]
})
export class MobilPageModule {}
