import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css']
})
export class CurrencyMainComponent {
  @Input() Current_currency:any={}
  show: boolean =false;


  Generate_currency(){
    this.show =true;
    this.Current_currency.usd=100;
    this.Current_currency.uah=4000;
  }
  Clear_currency(){
    this.Current_currency.usd=1;
    this.Current_currency.uah=40;
  }
}
