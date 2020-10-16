import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferbookingPageRoutingModule } from './offerbooking-routing.module';

import { OfferbookingPage } from './offerbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferbookingPageRoutingModule
  ],
  declarations: [OfferbookingPage]
})
export class OfferbookingPageModule {}
