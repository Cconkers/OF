import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { actionButtonComponent } from './actionButton.component';



@NgModule({
  declarations: [actionButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [actionButtonComponent]
})
export class actionButtonModule { }
