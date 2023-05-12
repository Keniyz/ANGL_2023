import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css']
})
export class CurrencyMainComponent {
  Current_currency={
    usd: 1,
    uah: 42
  }

  Generate_currency(){
    this.Current_currency.usd=100;
    this.Current_currency.uah=4000;
  }
  Clear_currency(){
    this.Current_currency.usd=1;
    this.Current_currency.uah=40;
  }
}
