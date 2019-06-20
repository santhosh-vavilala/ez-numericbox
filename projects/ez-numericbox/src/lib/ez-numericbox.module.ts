import { NgModule } from '@angular/core';
import { EzNumericboxComponent } from './ez-numericbox.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EzNumericboxComponent],
  imports: [CommonModule, FormsModule
  ],
  exports: [EzNumericboxComponent]
})
export class EzNumericboxModule { }
