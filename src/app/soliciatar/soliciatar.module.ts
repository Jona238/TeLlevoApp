import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliciatarPageRoutingModule } from './soliciatar-routing.module';

import { SoliciatarPage } from './soliciatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoliciatarPageRoutingModule
  ],
  declarations: [SoliciatarPage]
})
export class SoliciatarPageModule {}
