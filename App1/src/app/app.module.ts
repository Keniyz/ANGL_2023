import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyTopComponent } from './currency-top/currency-top.component';
import { CurrencyMainComponent } from './currency-main/currency-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTopComponent,
    CurrencyMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
