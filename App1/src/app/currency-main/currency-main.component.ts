import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css']
})
export class CurrencyMainComponent implements AfterViewInit {
  @Input() local_currency: any ={}
   value = 'Clear me';
   
   ngAfterViewInit() {
    console.log("ngAfterViewInit=",this.local_currency.length);
   }
   constructor(){
    console.log("constructor=",this.local_currency.length);
   }

   
}
