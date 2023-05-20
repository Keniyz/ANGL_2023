import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(public http: HttpClient ){}
   
  getCurrency(){
      return this.http.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
      console.log("res=",this.http.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"));
  }
 /* currency_object: {}[]

  constructor(public api:CurrencyService ){
  this.currency_object=fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then(resp=>resp.json())
}

*/
}
