import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EzNumericboxModule,  EzNumericboxService } from 'ez-numericbox'
import { AppComponent } from './app.component';
import { NumericBoxComponent } from './numeric-box/numeric-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumericBoxComponent,
  ],
  imports: [
    BrowserModule,
    EzNumericboxModule,
    FormsModule
  ],
  providers: [EzNumericboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
