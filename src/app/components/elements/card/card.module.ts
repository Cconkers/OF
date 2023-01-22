import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatCardModule} from '@angular/material/card';
import { cardComponent } from './card.component';



@NgModule({
  declarations: [cardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [cardComponent]
})
export class cardModule { }
