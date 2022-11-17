import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilEditPageRoutingModule } from './mobil-edit-routing.module';

import { MobilEditPage } from './mobil-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilEditPageRoutingModule
  ],
  declarations: [MobilEditPage]
})
export class MobilEditPageModule {}
