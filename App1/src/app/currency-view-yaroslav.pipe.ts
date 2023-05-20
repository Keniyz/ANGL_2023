import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyViewYaroslav'
})
export class CurrencyViewYaroslavPipe implements PipeTransform {

  transform(value: any, view: any, font_weight: any): unknown {
    let result =""

    if(font_weight == "bold"){
      result +="<b><i>";
    }
    if(view == "compair"){
      result += `${value.cc} : ${value.rate}UAH /last modify date: ${value.exchangedate}`;
    }else{
      result += `${value.cc} : ${value.rate}UAH`;
    }

    if(font_weight == "bold"){
      result +="</i></b>";
    }
    return result;
  }

}
