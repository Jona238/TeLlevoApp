import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoferPageRoutingModule } from './chofer-routing.module';

import { ChoferPage } from './chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoferPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ChoferPage]
})
export class ChoferPageModule {}
