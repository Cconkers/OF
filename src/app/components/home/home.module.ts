import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';

import { NgImageSliderModule } from 'ng-image-slider';
import { actionButtonModule } from '../elements/actionButton/actionButton.module';
import { cardModule } from '../elements/card/card.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    actionButtonModule,
    NgImageSliderModule,
    cardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
